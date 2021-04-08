import diaryData from '../data/diaryentries';

import { DiaryEntry, NewDiaryEntry } from '../types';

const diaries: Array<DiaryEntry> = diaryData;

const getEntries = (): Array<DiaryEntry> => {
  return diaries;
};

const getNonSensitiveEntries = () : DiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const addDiary = ( entry: NewDiaryEntry ): DiaryEntry => {
    
  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...entry
  };
  
  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};
const findById = (id: number): DiaryEntry | undefined=> {
  const entry = diaries.find(d => d.id === id);
  return entry;
};

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById
};
