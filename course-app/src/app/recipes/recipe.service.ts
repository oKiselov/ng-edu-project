import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingedient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/gfkids_maccheese.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('A second test recipe', 'This is simply a secong test',
    'https://cdn.wpsandwatch.com/var/sandwatch/storage/images/uk/hp/recipes2/details/bread-baskets-with-cherry-tomatoes/node_205543/3235058-1-eng-GB/image_HP_compressed.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingreds: Ingredient[]) {
    this.slService.addIngredients(ingreds);
  }
}
