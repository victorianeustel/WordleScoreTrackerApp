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

  constructor(private userServ: UsersService, private wordServ: WordsService, private scrServ: ScoresService) {}

  ngOnInit() {
  }


}
