import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1 class="well">Meal Tracker</h1>
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showMeal($event)"
    ></meal-list>
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Breakfast Sandwich", "bacon, egg, cheese", 300),
    new Meal("16oz coffee", "starbucks pike roast w cream", 5),
    new Meal("Oatmeal Raisin Cookie", "warm cookie from subway", 125)
  ];
  selectedMeal: Meal = null;
  showMeal(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
