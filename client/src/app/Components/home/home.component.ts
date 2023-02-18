import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/Services/users.service';
import { User } from 'src/app/Models/user';

import { WordsService } from 'src/app/Services/words.service';
import { Word } from 'src/app/Models/word';
import { Score } from 'src/app/Models/score';
import { ScoresService } from 'src/app/Services/scores.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userList: User[] = [];
  wordList: Word[] = [];
  scoreList: Score[] = [];

  sName = "";
  word = "";
  date = "";
  num=0;
  id = 0;
  score = 0;
  userID = 0;
  wordID = 0;

  constructor(private userServ: UsersService, private wordServ: WordsService, private scrServ: ScoresService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.userServ.getUsers().subscribe((data) => {
      this.userList = data;
    });
    this.wordServ.getWords().subscribe((data) => {
      this.wordList = data;
    });
    this.scrServ.getScores().subscribe((data)=>{
      this.scoreList = data;
    });
  }

  addNewUser() {
    const newUser: User = {
      user_id: ++this.id,
      user_name: this.sName,

    };
    this.userServ.addUser(newUser).subscribe((data) => {
      console.log(data);
      this.fetchData();
    });
  }

  addNewWord() {
    const newWord: Word = {
      word_value: this.word,
      word_date: this.date,
      word_id: ++this.num,
    };
    this.wordServ.addWord(newWord).subscribe((data) => {
      console.log(data);
      this.fetchData();
    });
  }

  addNewScore() {
    const newScore: Score = {
      user_id: this.userID,
      word_id: this.wordID,
      score_value: this.score,
    };
    this.scrServ.addScore(newScore).subscribe((data) => {
      console.log(data);
      this.fetchData();
    });
  }

  getUsersScore(wordID: number, userID: number){
    for (let i = 0; i < this.scoreList.length; i++){
      if (this.scoreList[i].user_id==userID && this.scoreList[i].word_id == wordID){
        return this.scoreList[i].score_value;
      }
      else {
      }
    }return null;
  }

}
