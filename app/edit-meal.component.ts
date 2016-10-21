import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'edit-meal',
  template: `
    <div class="edit-box col-sm-3 col-sm-offset-1 " *ngIf="childSelectedMeal">
    <h3 class="page-header">Edit Entry</h3>
      <div>
        <label>Edit Meal:</label>
        <input [(ngModel)]="childSelectedMeal.name">
      </div>
      <div>
        <label>Edit Ingredients:</label>
        <input [(ngModel)]="childSelectedMeal.details">
      </div>
      <div>
        <label>Edit Calories:</label>
        <input [(ngModel)]="childSelectedMeal.calories">
      </div>
      <button (click)="doneClicked()">Done</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
