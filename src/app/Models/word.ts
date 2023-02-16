import { Score } from "./score";

export interface Word {
    id: number;
    date: string;
    word: string;
    scores: Score[];
}

// export const words = [
//     {
//       wordID: 1,
//       date: ("2023-01-27"),
//       word: "Worry"
//     },
//     {
//         wordID: 2,
//         date: ("2023-01-28"),
//         word: "Flirt"
//     },
//     {
//         wordID: 3,
//         date: ("2023-01-29"),
//         word: "Fishy"
//       },
//   ];