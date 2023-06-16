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
      new Ingredient('Meat', 100, 'grams'),
      new Ingredient('Mayo', 20, 'grams'),
      new Ingredient('Bread', 1, 'burger bread'),
      new Ingredient('Lettuce', null, null)
    ];
   }

  ngOnInit(): void {
  }

  onIngredientAdded(newIngredient: Ingredient) {
    if(this.findInIngredientList(newIngredient)) {
      console.error("Already present");
    } else {
      this.ingredientList.push(newIngredient)
    }
  }

  onIngredientEdited(newIngredient: Ingredient) {
    if(this.findInIngredientList(newIngredient) == null) {
      console.error("Element to edit not present in list");
    } else {
      this.findInIngredientList(newIngredient).amount = newIngredient.amount;
      this.findInIngredientList(newIngredient).unit = newIngredient.unit;
    }
  }

  onIngredientRemoved(newIngredient: Ingredient) {
    let toDelete: Ingredient = this.findInIngredientList(newIngredient)

    if(toDelete == null) {
      console.error("Element to delete not present in list");
      return;
    }

    this.ingredientList.splice(this.ingredientList.indexOf(toDelete), 1)
  }


  /**
   * Finds ingredient in list if present
   *
   * @param newIngredient
   * @returns Ingredient
   */
  findInIngredientList(newIngredient: Ingredient) {
    return this.ingredientList.find((obj) => {
      return obj.name === newIngredient.name;
    });
  }
}
