import { Injectable } from '@angular/core';
import {UserI} from 'src/app/modeles/id-i'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserI=<UserI>{};
  constructor() { }
}
