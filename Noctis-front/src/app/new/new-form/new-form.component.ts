import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.scss'
})
export class NewFormComponent implements OnInit {
  inputForm! : FormGroup;

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      'name' : new FormControl(),
      'lastName' : new FormControl(),
      'email' : new FormControl(),
      'phoneNumber' : new FormControl(),
      'description' : new FormControl()

    })
  }

}
