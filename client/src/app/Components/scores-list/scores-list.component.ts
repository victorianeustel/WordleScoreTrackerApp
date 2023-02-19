import { Component } from '@angular/core';
import { User } from 'src/app/Models/user';
import { Score } from 'src/app/Models/score';
import { Word } from 'src/app/Models/word';
import { WordsService } from 'src/app/Services/words.service';
import { ScoresService } from 'src/app/Services/scores.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-scores-list',
  templateUrl: './scores-list.component.html',
  styleUrls: ['./scores-list.component.css']
})
export class ScoresListComponent {
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

  getUsersScore(wordID: number, userID: number){
    for (let i = 0; i < this.scoreList.length; i++){
      if (this.scoreList[i].user_id==userID && this.scoreList[i].word_id == wordID){
        return this.scoreList[i].score_value;
      }
      else {
      }
    }return "-";
  }

}
