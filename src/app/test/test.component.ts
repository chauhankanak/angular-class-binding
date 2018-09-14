import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 class="text-success"> Binding 1</h2>
    <h2 class="text-danger"> Binding 2</h2>
    <h2 class="text-special"> Binding 3</h2>
    <h2 class="{{success}}"> Binding 4</h2>
    <h2 class="{{error}}"> Binding 5</h2>
    <h2 class="{{special}}"> Binding 6</h2>
    <h2 [class]="success"> Binding 7</h2>
    <h2 [class]="error"> Binding 8</h2>
    <h2 [class.text-danger]="isError"> Binding 9</h2>
    <h2 [class.color]="isError ? 'red' : 'green' "> Binding 10</h2>
    <h2 [ngClass]="classStyle"> Binding 10</h2>
  `,
  styles: [
    `
     .text-success  {
       color : green;
      }
      .text-danger  {
        color : red;
       }
       .text-special  {
        font-style : italic;
       }
    `
  ]
})
export class TestComponent implements OnInit {

  constructor() { }

  public success: String = 'text-success';
  public error: String = 'text-danger';
  public special: String = 'text-special';
  public isError: Boolean = false;
  public isSpecial: Boolean = true;
  public classStyle = {
    'text-success': !this.isError,
    'text-danger': this.isError,
    'text-special': this.isSpecial
  };
  ngOnInit() {
  }

}
