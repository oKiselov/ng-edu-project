import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(
      'https://ng-recipe-book-da109.firebaseio.com/recipes.json',
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-da109.firebaseio.com/recipes.json')
    .map(
      (response:Response) => {
        const recipes: Recipe[] = response.json();
        for (let rec of recipes) {
          if (!rec['ingredients']) {
            console.log(rec);
            rec['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (response: Recipe[]) => {
        this.recipeService.setRecipes(response);
      }
    );
  }
}
