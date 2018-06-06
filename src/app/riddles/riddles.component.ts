import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-riddles',
  templateUrl: './riddles.component.html',
  styles: ['p{text-align: center}']
})
export class RiddlesComponent implements OnInit {

  switch = false;

  constructor() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  ngOnInit() {
  }

}
