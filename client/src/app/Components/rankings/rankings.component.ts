import { Component } from '@angular/core';
import { ScoresService } from 'src/app/Services/scores.service';
import { Ranking } from 'src/app/Models/ranking';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent {

  sName = "";
  word = "";
  date = "";
  num=0;
  id = 0;
  score = 0;
  userID = 0;
  wordID = 0;

  rankingList: Ranking[] = [];

  constructor(private scrServ: ScoresService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.scrServ.getRankings().subscribe((data)=>{
      this.rankingList = data;
    });
  }

  roundAvg(i: string){
    return parseFloat(i).toFixed(2);
  }
}
