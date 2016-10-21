import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list
      [childMealList]="masterMealList"
    ></meal-list>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Breakfast Sandwich", "bacon, egg, cheese", 300),
    new Meal("16oz coffee", "starbucks pike roast w cream", 5),
    new Meal("Oatmeal Raisin Cookie", "warm cookie from subway", 125)
  ];

}
