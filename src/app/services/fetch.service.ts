import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  subject= new BehaviorSubject('');
  subject1=new BehaviorSubject('');
  subject2=new BehaviorSubject('');
  subject3=new BehaviorSubject('');
  subject4=new BehaviorSubject('');
  subject5=new BehaviorSubject('');
  subject6=new BehaviorSubject('');


  constructor() { }
}
