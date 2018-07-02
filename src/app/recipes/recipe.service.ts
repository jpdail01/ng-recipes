import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.cnn.com/cnnnext/dam/assets/170308101225-fruit-stock-exlarge-169.jpg',
      [
        new Ingredient('apple', 5),
        new Ingredient('orange', 3),
      ]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://cdn.cnn.com/cnnnext/dam/assets/170308101225-fruit-stock-exlarge-169.jpg',
      [
        new Ingredient('hot dog', 2),
        new Ingredient('burger', 2),
      ]
    ),
    new Recipe(
      'Third Test Recipe',
      'This is simply a test',
      'https://cdn.cnn.com/cnnnext/dam/assets/170308101225-fruit-stock-exlarge-169.jpg',
      [
        new Ingredient('flour', 4),
        new Ingredient('yeast', 1),
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice(); // returns a new array so can't get from outside
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
