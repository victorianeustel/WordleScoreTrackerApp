import { Injectable } from '@angular/core';
import { Word } from '../Models/word';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WordsService {

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
        'https://wordle-contest-default-rtdb.firebaseio.com/' + 'Words.json'
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
