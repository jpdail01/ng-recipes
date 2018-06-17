import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.cnn.com/cnnnext/dam/assets/170308101225-fruit-stock-exlarge-169.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.cnn.com/cnnnext/dam/assets/170308101225-fruit-stock-exlarge-169.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.cnn.com/cnnnext/dam/assets/170308101225-fruit-stock-exlarge-169.jpg'
    ),
  ];

  constructor() { }

  ngOnInit() {
  }

}
