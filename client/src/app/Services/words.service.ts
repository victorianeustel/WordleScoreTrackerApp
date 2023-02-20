import { Injectable } from '@angular/core';
import { Word } from '../Models/word';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WordsService {
 
  private apiURL = "http://localhost:3080/"; //YOUR API URL
  // private apiURL = "https://wordlecontest-apbdgrv74a-uc.a.run.app"; //YOUR API URL

  wordsList: Word[] = [];

  constructor(private http: HttpClient) { }

  addWord(newWord: Word) {
    return this.http.post(
      'https://wordle-contest-default-rtdb.firebaseio.com/' + 'Words.json',
      newWord
    );
  }

  getWords() {
    return this.http
      .get<Word[]>(
      this.apiURL + 'Words'
      )
      .pipe(
        map((responseData) => {
          const wordList: Word[] = [];
          for (const key in responseData) wordList.push(responseData[key]);
          return wordList;
        })
      );
  }
  // }
}
