import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-data-binding-demo',
standalone: true,
imports: [CommonModule, FormsModule],

templateUrl: './data-binding-demo.component.html',
styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {
// Properties for interpolation
pageTitle = 'Angular 19 Data Binding Examples';
currentTime = new Date();
// Properties for property binding
imageUrl = 'assets/angular-logo.png';
isDisabled = true;
buttonColor = 'primary';
progressValue = 75;
// Properties for event binding
clickCount = 0;
mousePosition = { x: 0, y: 0 };
inputValue = '';
// Properties for two-way binding
name = '';
email = '';
favoriteFramework = 'Angular';
// Methods for event binding
incrementCount() {
this.clickCount++;
if (this.clickCount >= 5) {
this.isDisabled = false;
this.buttonColor = 'success';
}
}
resetCount() {
this.clickCount = 0;
this.isDisabled = true;
this.buttonColor = 'primary';
}
trackMousePosition(event: MouseEvent) {
this.mousePosition = {
x: event.clientX,
y: event.clientY
};
}
onInput(event: Event) {
this.inputValue = (event.target as HTMLInputElement).value;
}
// Method to demonstrate combination of bindings
submitForm() {
alert(`Form submitted!\nName: ${this.name}\nEmail:
${this.email}\nFavorite Framework: ${this.favoriteFramework}`);
this.resetForm();

}
resetForm() {
this.name = '';
this.email = '';
this.favoriteFramework = 'Angular';
}
}