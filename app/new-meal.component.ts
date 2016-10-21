import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="new-box col-sm-4">
  <h3 class="page-header">New Entry</h3>
    <div>
      <label>Meal Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Ingredients:</label>
      <input #newDetails>
    </div>
    <div>
      <label>Calories:</label>
      <input #newCalories>
    </div>
    <button (click)="
      addClicked(newName.value, newDetails.value, newCalories.value);
      newName.value='';
      newDetails.value='';
      newCalories.value='';
    ">Add</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details:string, calories: number) {
    var newMealToAdd: Meal = new Meal (name, details, calories);
    this.newMealSender.emit(newMealToAdd);
    console.log(newMealToAdd); //to test new object instantiation
  }
}
