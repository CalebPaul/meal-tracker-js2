import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="row">
      <h1 class="well">Meal Tracker</h1>
      <new-meal
        (newMealSender)="addMeal($event)"
      ></new-meal>
      <meal-list
        [childMealList]="masterMealList"
        (clickSender)="showMeal($event)"
      ></meal-list>
      <edit-meal
        [childSelectedMeal]="selectedMeal"
        (doneClickedSender)="finishedEditing()"
      ></edit-meal>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Breakfast Sandwich", "bacon, egg, cheese", 300),
    new Meal("16oz coffee", "starbucks pike roast w cream", 5),
    new Meal("Burger and Fries", "bacon cheesburger w fries", 950),
    new Meal("Oatmeal Raisin Cookie", "warm cookie from subway", 125),
    new Meal("Pasta", "pasta with ground beef and red sauce", 700),
    new Meal("Ice Cream", "rum raisin ice cream", 600),
    new Meal("Triple Ginger Snaps", "so much ginger, bro", 400)
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
