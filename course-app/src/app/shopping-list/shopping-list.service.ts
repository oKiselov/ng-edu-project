import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingedient.model';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.getIngredients());
  }

  addIngredients(ingreds: Ingredient[]) {
    // for (let ingred of ingreds){
    //   this.addIngredient(ingred);
    // }
    this.ingredients.push(...ingreds);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
