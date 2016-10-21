# _Meal Tracker_

#### _10-21-2016_
![project screenshot](/resources/img/screenshot.png)
#### By _**Caleb Paul**_

## Description

_Meal Tracker is a site that logs meals and calories._
_Entries are editable, and lists are sortable by caloric content._

## User Stories
* I want to log a food I have eaten by submitting a form with food name, calories and details.
* I want to view a list of foods I have logged.
* I want options to view all foods, only high-calorie foods (more than 500 calories), or only lower-calorie foods (less than 500 calories).
* I want to click a food to edit its name, details or calories (in case I decide to pretend my fries were 100 calories instead of 365).

## Setup/Installation Requirements

* _Clone this repository (https://github.com/CalebPaul/meal-tracker-js2.git) to your desktop._
* _Navigate to project folder using terminal._
* _Install Node Package Manager(npm) by typing `npm install` in terminal._
* _Install Bower by typing `bower install`._
* _Install Typescript by typing `apm install typescript` in terminal._
* _Install all dependencies listed in the package.json, and bower.json files._
* _Type `gulp serve` in terminal, this will open the web app in your browser._


## Known Bugs

_None known_

## Specifications
* On site load:
    - Site displays meal info (meal, ingredients, calories) in scrollable 'entries' list.
    - Site displays 'New Entry' inputs.

* When user selects 'edit':
    - Edit form is made visible in right div.
    - site allows fields to be edited with two-way binding.
    - When user selects 'done', edit form will no longer be visible.

* When user adds an entry:
    - site collects information from fields.
    - site displays new entry entries list.
    - site handles errors for incomplete, or incorrect submissions.

* When user interacts with caloric filter:
    - site displays info for selected caloric values.

## Support and contact details

_Caleb Paul: @calebpaulmusic_


## Technologies Used

_Bootstrap_
_Javascript_
_jQuery_
_Node_
_Gulp_
_Bower_
_Angular_

### License
*This webpage is licensed under the GPL license.*

Copyright (c) 2016 **_Caleb Paul_**
