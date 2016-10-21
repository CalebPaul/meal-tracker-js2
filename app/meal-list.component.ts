import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="col-sm-4  col-sm-offset-1 list-box">
    <h3 class="page-header">Entries</h3>
    <div class="scroll-bar">
      <select (change)="onChange($event.target.value)">
        <option value="all">All Entries</option>
        <option value="high">High Calorie Entries (500 calories or higher)</option>
        <option value="low">Low Calorie Entries (under 500 calories)</option>
      </select>
      <div class="meal-in-list" *ngFor="let currentMeal of childMealList | calorie:desiredCal">
        <h4><strong>{{currentMeal.name}}</strong>, <em>{{"Calories: "+currentMeal.calories}}</em></h4>
        <h5>{{"Ingredients: "+currentMeal.details}}</h5>
        <button (click)="editButtonClicked(currentMeal)">Edit</button>
      </div>
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public desiredCal: string = "all";
  onChange(optionFromMenu) {
    this.desiredCal = optionFromMenu;
    console.log(this.desiredCal); //to test option value
  }
  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

}
