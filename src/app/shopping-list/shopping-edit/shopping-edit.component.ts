import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) ingredientNameRef: ElementRef;
  @ViewChild('amountInput', {static: false}) ingredientAmountRef: ElementRef;
  @ViewChild('unitInput', {static: false}) ingredientUnitRef: ElementRef;

  @Output() ingredientAdded   = new EventEmitter<Ingredient>;
  @Output() ingredientEdited  = new EventEmitter<Ingredient>;
  @Output() ingredientRemoved = new EventEmitter<Ingredient>;


  constructor() { }

  ngOnInit(): void { }

  onIngredientCreate() {
    const createdIngredient = new Ingredient(
      this.ingredientNameRef.nativeElement.value,
      this.ingredientAmountRef.nativeElement.value,
      this.ingredientUnitRef.nativeElement.value
    )

    this.ingredientAdded.emit(createdIngredient);
  }

  onIngredientEdit() {
    const createdIngredient = new Ingredient(
      this.ingredientNameRef.nativeElement.value,
      this.ingredientAmountRef.nativeElement.value,
      this.ingredientUnitRef.nativeElement.value
    )

    this.ingredientEdited.emit(createdIngredient);
  
  }

  onIngredientDelete() {
    const createdIngredient = new Ingredient(
      this.ingredientNameRef.nativeElement.value,
      this.ingredientAmountRef.nativeElement.value,
      this.ingredientUnitRef.nativeElement.value
    )

    this.ingredientRemoved.emit(createdIngredient);
  }

}
