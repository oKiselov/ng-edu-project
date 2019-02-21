import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/gfkids_maccheese.jpg'),
    new Recipe('A test recipe', 'This is simply a test',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/gfkids_maccheese.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
