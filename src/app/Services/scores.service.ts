import { Score } from '../Models/score';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor(private http: HttpClient) { }

  addScore(newScore: Score) {
    return this.http.post(
      'https://wordle-contest-default-rtdb.firebaseio.com/' + 'Scores.json',
      newScore
    );
  }

  getScores() {
    return this.http
      .get<Score[]>(
        'https://wordle-contest-default-rtdb.firebaseio.com/' + 'Scores.json'
      )
      .pipe(
        map((responseData) => {
          const scoreList: Score[] = [];
          for (const key in responseData) scoreList.push(responseData[key]);
          return scoreList;
        })
      );
  }
}