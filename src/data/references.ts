import csv from './references.csv?raw';
import customers from './customers.csv?raw';
import { getReferenceGroups } from './references-csv';

export const czechReferenceGroups = getReferenceGroups(csv, 'cs', customers);
export const englishReferenceGroups = getReferenceGroups(csv, 'en', customers);
