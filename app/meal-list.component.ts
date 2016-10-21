import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <h3 class="page-header">Meal Entries</h3>
    <div class="meal-in-list" *ngFor="let currentMeal of childMealList">
      <h4><strong>{{currentMeal.name}}</strong>, <em>{{"Calories: "+currentMeal.calories}}</em></h4>
      <h5>{{"Ingredients: "+currentMeal.details}}</h5>
      <button (click)="editButtonClicked(currentMeal)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

}
