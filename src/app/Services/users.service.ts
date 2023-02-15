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

  idList: string[] = [];

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  //get accounts from database
  getUsers(){
    return this.http
    .get<User[]>
      ('https://wordle-contest-default-rtdb.firebaseio.com' + 'users.json')
      .pipe(
        map((responseData) => {
          const userList: User[] = [];
          this.idList = [];
          for (const key in responseData)
           userList.push(responseData[key]);
          for (const key in responseData)
            this.idList.push(key);

          // console.log(key in responseData);
          return userList;
        })
      );
  }
}
