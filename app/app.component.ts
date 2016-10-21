import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list

    ></meal-list>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("breakfast sandwich", "bacon, egg, cheese", 300),
    new Meal("16oz coffee", "starbucks pike roast w cream", 5),
    new Meal("oatmeal raisin cookie", "warm cookie from subway", 125)
  ]
}
