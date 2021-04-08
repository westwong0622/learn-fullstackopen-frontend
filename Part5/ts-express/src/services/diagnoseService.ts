import diagnoseData from '../data/diagnoses.json';

import { DiagnoseEntry } from '../types';

const diaries: Array<DiagnoseEntry> = diagnoseData as Array<DiagnoseEntry>;

const getEntries = (): Array<DiagnoseEntry> => {
  return diaries;
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry
};
