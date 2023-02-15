import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoresComponent } from './Components/scores/scores.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './Components/home/home.component';
import { ScoresService } from './Services/scores.service';
import { UsersService } from './Services/users.service';
import { WordsService } from './Services/words.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
    ScoresComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'scores', component: ScoresComponent },
      { path: 'users', component: UsersComponent },
    ])
  ],
  providers: [ScoresService, UsersService, WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
