import test from 'node:test';
import assert from 'node:assert/strict';

import { rewriteRelativeGithubImages } from './fetch-external-articles.mjs';

test('rewriteRelativeGithubImages converts local image references to absolute GitHub raw URLs', () => {
  const markdown = `# Demo\n\n![Alt](./images/diagram.png)\n\n![Other](../images/other.png)\n\n<img src="./images/local.svg" />`;

  const rewritten = rewriteRelativeGithubImages(markdown, {
    repo: 'CodElecCz/STM32F1-CLRC663',
    branch: 'main',
    rootPath: 'blog',
  });

  assert.match(rewritten, /https:\/\/raw\.githubusercontent\.com\/CodElecCz\/STM32F1-CLRC663\/main\/blog\/images\/diagram\.png/);
  assert.match(rewritten, /https:\/\/raw\.githubusercontent\.com\/CodElecCz\/STM32F1-CLRC663\/main\/blog\/images\/other\.png/);
  assert.match(rewritten, /https:\/\/raw\.githubusercontent\.com\/CodElecCz\/STM32F1-CLRC663\/main\/blog\/images\/local\.svg/);
  assert.doesNotMatch(rewritten, /\]\(\.\/images\//);
});
