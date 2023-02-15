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

  getWords(){
    this.wordsList = [];
    return this.http
    .get<Word[]>
      ('https://wordle-contest-default-rtdb.firebaseio.com/' + 'words.json')
      .pipe(
        map((responseData) => {
          for (const key in responseData)
           this.wordsList.push(responseData[key]);
        
           return this.wordsList;
        })
      );
  }

  addWord(word: Word) {
    return this.http.post(
      'https://wordle-contest-default-rtdb.firebaseio.com/'+ 'words.json',
      word
    );
  }
}
