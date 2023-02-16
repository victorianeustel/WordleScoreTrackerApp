import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/Services/users.service';
import { User } from 'src/app/Models/user';

import { WordsService } from 'src/app/Services/words.service';
import { Word } from 'src/app/Models/word';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userList: User[] = [];
  wordList: Word[] = [];

  sName = "";
  word = "";
  date = "";
  num=0;
  
  constructor(private userServ: UsersService, private wordServ: WordsService) {}

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
  }

  addNewUser() {
    const newUser: User = {
      name: this.sName,
    };
    this.userServ.addUser(newUser).subscribe((data) => {
      console.log(data);
      this.fetchData();
    });
  }

  addNewWord() {
    const newWord: Word = {
      word: this.word,
      date: this.date,
      wordID: ++this.num,
    };
    this.wordServ.addWord(newWord).subscribe((data) => {
      console.log(data);
      this.fetchData();
    });
  }


}
