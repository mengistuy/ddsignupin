// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

myForm: FormGroup;

  genders = [
    'male',
    'female'
  ];

constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
    'userData': formBuilder.group({
      'firstName': ['First Name', [Validators.required, this.nameValidator]],
      'lastName': ['Last Name', [Validators.required, this.nameValidator]],
      'email': ['Email', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]]
    }),
    'password': ['Password', Validators.required],
    'confirmPassword': ['Confirm Password', Validators.required],
    'acceptance': ['', [Validators.required, this.checkValidator]]
  });

  this.myForm.valueChanges.subscribe(
    (data: any) => console.log(data)
  );
}

onSubmit() {
  console.log(this.myForm);
}

nameValidator(control: FormControl): { [s: string]: boolean } {
  if (control.value === null) {
    return {'invalid': true};
  }
  return { example: true };
}


checkValidator(control: FormControl): { [s: string]: boolean } {
  if (control.value === null) {
    return {example: false};
  }
  return { example: true };
}

}

