import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.cnn.com/cnnnext/dam/assets/170308101225-fruit-stock-exlarge-169.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://cdn.cnn.com/cnnnext/dam/assets/170308101225-fruit-stock-exlarge-169.jpg'
    ),
    new Recipe(
      'Third Test Recipe',
      'This is simply a test',
      'https://cdn.cnn.com/cnnnext/dam/assets/170308101225-fruit-stock-exlarge-169.jpg'
    ),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
