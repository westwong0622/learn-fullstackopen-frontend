import express from "express";
import diaryService from '../services/diaryService';

const router = express.Router();

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));

  if (diary) {
    res.send(diaryService.getNonSensitiveEntries());
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const { date, weather, visibility, comment } = req.body;
  const newDiaryEntry = diaryService.addDiary({
    date,
    weather,
    visibility,
    comment,
  });
  res.json(newDiaryEntry);
});

export default router;
