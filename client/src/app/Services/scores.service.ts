import { Score } from '../Models/score';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { User } from '../Models/user';
import { UsersService } from './users.service';
import { WordsService } from './words.service';
import { Ranking } from '../Models/ranking';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private apiURL = "http://localhost:3080/"; //YOUR API URL

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
        this.apiURL + 'scores'
      )
      .pipe(
        map((responseData) => {
          const scoreList: Score[] = [];
          for (const key in responseData) scoreList.push(responseData[key]);
          return scoreList;
        })
      );
  }

  getRankings() {
    return this.http
      .get<Ranking[]>(
        this.apiURL + 'rankings'
      )
      .pipe(
        map((responseData) => {
          const rankingList: Ranking[] = [];
          for (const key in responseData) rankingList.push(responseData[key]);
          return rankingList;
        })
      );
  }

}