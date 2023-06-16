import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipeList: Recipe[] = [
    new Recipe("Burger", "Five Guys burger", "https://fastly.4sqi.net/img/general/600x600/41031359_XJ4b2sRG2QgTDfUGb0dL5WO8QJU5EJKEvImd36DNNMk.jpg"),
    new Recipe("Pizza", "Domino's Pizza", "https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_1860/public/media/image/2020/06/pizza-dominos-pizza-1968089.jpg?itok=ffKr7M5H"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
