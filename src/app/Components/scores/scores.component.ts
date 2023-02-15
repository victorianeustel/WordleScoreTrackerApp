import { Component } from '@angular/core';
import { Score, scores } from '../../Models/score';
import { User } from '../../Models/user';
import { ScoresService } from '../../Services/scores.service';


@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent {
  
  scores = scores;
  constructor(private score: ScoresService) { }

}
