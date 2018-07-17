import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from '../../../node_modules/rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This is simply a test',
      'https://cdn.cnn.com/cnnnext/dam/assets/170308101225-fruit-stock-exlarge-169.jpg',
      [new Ingredient('apple', 5), new Ingredient('orange', 3)]
    ),
    new Recipe(
      'Another Test Recipe 2',
      'This is simply a test',
      'https://cdn.cnn.com/cnnnext/dam/assets/170308101225-fruit-stock-exlarge-169.jpg',
      [new Ingredient('hot dog', 2), new Ingredient('burger', 2)]
    )
  ];

  constructor(
    private shoppingListService: ShoppingListService
  ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice(); // returns a new array so can't get from outside
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
