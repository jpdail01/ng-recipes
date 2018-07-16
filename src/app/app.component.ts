import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NG Recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDoc9dQTkn6eaaR1tNHTiinfgwbklEuF3E',
      authDomain: 'ng-recipes-8597b.firebaseapp.com',
    });
  }
}
