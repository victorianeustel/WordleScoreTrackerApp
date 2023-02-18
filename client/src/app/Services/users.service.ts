import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {User} from '../Models/user';
import { Score } from '../Models/score';
import { findIndex, map, timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiURL = "http://localhost:3080/"; //YOUR API URL
  
  constructor(private http: HttpClient) { }

  userList: User[] = [];

  addUser(newUser: User) {
    return this.http.post(
      'https://wordle-contest-default-rtdb.firebaseio.com/' + 'Users.json',
      newUser
    );
  }

  getUsers() {
    return this.http
      .get<User[]>(
        this.apiURL + 'users'
      )
      .pipe(
        map((responseData) => {
          const userList: User[] = [];
          for (const key in responseData) userList.push(responseData[key]);
          console.log(userList);
          return userList;
        })
      );
  }

  getScores() {
    return this.http
      .get<[]>(
        this.apiURL + 'scores'
      )
      .pipe(
        map((responseData) => {
          const wordScoreList: [][] = [];
          for (const key in responseData) wordScoreList.push(responseData[key]);
          console.log(wordScoreList);
          return wordScoreList;
        })
      );
  }

}
