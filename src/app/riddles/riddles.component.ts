import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-riddles',
  templateUrl: './riddles.component.html',
  styles: ['p{text-align: center}']
})
export class RiddlesComponent implements OnInit {

  cheatcode = '';

  constructor() {
  }

  onSubmit(form: NgForm) {
    this.cheatcode = form.value;
    console.log(form.value);
  }

  ngOnInit() {
  }

}
