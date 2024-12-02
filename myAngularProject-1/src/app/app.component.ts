import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  inputVal: string = '';
  dynamicVal: string = '';
  count: number = 0;
  counter(type: string) {
    type === 'inc' ? this.count++ : this.count--;
  }
}
