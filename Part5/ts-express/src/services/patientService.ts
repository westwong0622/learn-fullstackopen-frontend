import patientData from '../data/patients.json';

import { PatientEntry } from '../types';

const diaries: Array<PatientEntry> = patientData as Array<PatientEntry>;

const getEntries = (): Array<PatientEntry> => {
  return diaries;
};

const getNonSensitiveEntries = () : PatientEntry[] => {
  return diaries.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
  dateOfBirth,
  gender,
  occupation,
  }));
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry,
  getNonSensitiveEntries
};
