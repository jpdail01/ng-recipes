import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    // option to call shopping directly or use recipe and inject shopping in it
    // this.recipe.ingredients.map(i => this.shoppingListService.addIngredient(i));
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
