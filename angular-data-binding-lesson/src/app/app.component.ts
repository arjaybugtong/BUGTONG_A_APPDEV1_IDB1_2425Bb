import { Component } from '@angular/core';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataBindingDemoComponent],
  template: `
    <div class="app-container">
      <header>
        <h1>Angular 19 Data Binding Lesson</h1>
      </header>
      <main>
        <app-data-binding-demo></app-data-binding-demo>
      </main>
      <footer>
        <p>Angular 19 Data Binding Techniques Demo</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      font-family: Arial, sans-serif;
    }
    header, footer {
      background-color: #3f51b5;
      color: white;
      padding: 10px 20px;
      text-align: center;
    }
    footer {
      margin-top: 30px;
      font-size: 14px;
    }
  `]
})
export class AppComponent {}
