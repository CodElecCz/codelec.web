import csv from './refereces.csv?raw';
import { getReferenceGroups } from './reference-csv';

export const czechReferenceGroups = getReferenceGroups(csv, 'cs');
export const englishReferenceGroups = getReferenceGroups(csv, 'en');
