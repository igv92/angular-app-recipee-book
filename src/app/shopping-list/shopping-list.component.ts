import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientList: Ingredient[];

  constructor() {
    this.ingredientList = [
      new Ingredient('Meat', 200, 'grams'),
      new Ingredient('Mayo', 20, 'grams'),
      new Ingredient('Bread', 1, 'burger bread')
    ];
   }

  ngOnInit(): void {
  }

}
