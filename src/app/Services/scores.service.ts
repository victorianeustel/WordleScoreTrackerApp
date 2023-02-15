import { Score } from '../Models/score';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor() { }

  scores: Score[] = [];

  addScore(score: Score) {
    this.scores.push(score);
  }

  getItems() {
    return this.scores;
  }
}
