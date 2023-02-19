import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {MatList, MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';


import { AngularFireModule } from '@angular/fire/compat';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'  
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ScoresComponent } from './Components/scores/scores.component';
import { UsersComponent } from './Components/users/users.component';
import { HomeComponent } from './Components/home/home.component';

import { ScoresService } from './Services/scores.service';
import { UsersService } from './Services/users.service';
import { WordsService } from './Services/words.service';
import { ScoresListComponent } from './Components/scores-list/scores-list.component';

import { environment } from 'src/environments/environment.development';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { RankingsComponent } from './Components/rankings/rankings.component';
import { AddScoreComponent } from './add-score/add-score.component';
import { AddWordComponent } from './add-word/add-word.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoresComponent,
    UsersComponent,
    HomeComponent,
    ScoresListComponent,
    NavBarComponent,
    RankingsComponent,
    AddScoreComponent,
    AddWordComponent
  ],
  imports: [
    MatListModule,
    MatGridListModule,
    MatDatepickerModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'scores', component: ScoresComponent },
      { path: 'users', component: UsersComponent },
      { path: 'scores-list', component: ScoresListComponent},
      { path: 'add-score', component: AddScoreComponent },
      { path: 'add-word', component: AddWordComponent},
      
    ]),
    BrowserAnimationsModule
  ],
  providers: [ScoresService, UsersService, WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
