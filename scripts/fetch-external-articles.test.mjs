import test from 'node:test';
import assert from 'node:assert/strict';

import { rewriteRelativeGithubImages } from './fetch-external-articles.mjs';

test('rewriteRelativeGithubImages converts local image references to absolute GitHub raw URLs', () => {
  const markdown = `# Demo

![Alt](./images/diagram.png)
![Other](../images/other.png)
![Bare](images/bare.png "Caption")
<img src="./images/local.svg" />
<img data-src="images/lazy.png" />
![Remote](https://example.com/image.png)
![Root](/images/root.png)
![Fragment](#image)`;

  const rewritten = rewriteRelativeGithubImages(markdown, {
    repo: 'CodElecCz/STM32F1-CLRC663',
    branch: 'main',
    rootPath: 'blog',
  });

  assert.match(rewritten, /https:\/\/raw\.githubusercontent\.com\/CodElecCz\/STM32F1-CLRC663\/main\/blog\/images\/diagram\.png/);
  assert.match(rewritten, /https:\/\/raw\.githubusercontent\.com\/CodElecCz\/STM32F1-CLRC663\/main\/images\/other\.png/);
  assert.match(rewritten, /https:\/\/raw\.githubusercontent\.com\/CodElecCz\/STM32F1-CLRC663\/main\/blog\/images\/bare\.png "Caption"/);
  assert.match(rewritten, /https:\/\/raw\.githubusercontent\.com\/CodElecCz\/STM32F1-CLRC663\/main\/blog\/images\/local\.svg/);
  assert.match(rewritten, /https:\/\/raw\.githubusercontent\.com\/CodElecCz\/STM32F1-CLRC663\/main\/blog\/images\/lazy\.png/);
  assert.match(rewritten, /!\[Remote\]\(https:\/\/example\.com\/image\.png\)/);
  assert.match(rewritten, /!\[Root\]\(\/images\/root\.png\)/);
  assert.match(rewritten, /!\[Fragment\]\(#image\)/);
  assert.doesNotMatch(rewritten, /\]\(\.\/images\//);
});
