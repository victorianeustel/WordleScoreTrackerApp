import { Word } from "./word";

export interface Score {
    word: Word;
    score: number;
}

export const scores = [
    {
      userID: 1,
      wordID: 1,
      score: 5,
    },
    {
        userID: 2,
        wordID: 1,
        score: 4,
    },
    {
        userID: 3,
        wordID: 1,
        score: 3,
    },
    {
        userID: 4,
        wordID: 1,
        score: 4,
    },
    {
        userID: 5,
        wordID: 1,
        score: 3,
    },
  ];