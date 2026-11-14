import csv from './references.csv?raw';
import { getReferenceGroups } from './references-csv';

export const czechReferenceGroups = getReferenceGroups(csv, 'cs');
export const englishReferenceGroups = getReferenceGroups(csv, 'en');
