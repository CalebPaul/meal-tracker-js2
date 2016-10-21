import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="new-box col-sm-3">
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
  addClicked(name: string, details: string, calories: number) {

    var newMealToAdd: Meal = new Meal (name, details, calories);
    if (newMealToAdd.name === "") {
      alert("Please complete 'Meal Name' field.");
      return false;
    } else if (newMealToAdd.details === "") {
      alert("Please complete 'Ingredients' field.");
      return false;
    } else if (isNaN(calories)) {
      alert("Please enter a numeric value in 'Calories' field.");
      return false;
    } else if (!calories) {
      alert("Please complete 'Calories' field.");
      return false;
    }
    // ^ logic/branching to catch empty field entries.
    this.newMealSender.emit(newMealToAdd);
    console.log(newMealToAdd); //to test new object instantiation.
  }
}
