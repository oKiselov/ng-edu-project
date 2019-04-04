import { Ingredient } from '../shared/ingedient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.getIngredients());
  }

  addIngredients(ingreds: Ingredient[]) {
    // for (let ingred of ingreds){
    //   this.addIngredient(ingred);
    // }
    this.ingredients.push(...ingreds);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
