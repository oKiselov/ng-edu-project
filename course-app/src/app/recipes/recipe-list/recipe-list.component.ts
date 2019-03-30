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
    new Recipe('A test recipe', 'This is simply a test',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/gfkids_maccheese.jpg'),
    new Recipe('A second test recipe', 'This is simply a secong test',
    'https://cdn.wpsandwatch.com/var/sandwatch/storage/images/uk/hp/recipes2/details/bread-baskets-with-cherry-tomatoes/node_205543/3235058-1-eng-GB/image_HP_compressed.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeListSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
