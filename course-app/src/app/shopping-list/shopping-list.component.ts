import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingedient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService,
              private subscription: Subscription) { }

  // ngOnInit() {
  //   this.ingredients = this.slService.getIngredients();
  //   this.subscription = this.slService.ingredientsChanged
  //     .subscribe(
  //       (ingredients: Ingredient[]) => {
  //         this.ingredients = ingredients;
  //         const vs = 15;
  //         console.log('inside');
  //       }
  //     );
  // }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
          const vs = 15;
          console.log('inside');
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
