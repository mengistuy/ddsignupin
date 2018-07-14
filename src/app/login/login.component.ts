import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
myForm: FormGroup;

genders = [
  'male',
  'female'
];

constructor(private formBuilder: FormBuilder) {
  this.myForm = formBuilder.group({
  'userData': formBuilder.group({
    'email': ['Email', [
      Validators.required,
      Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    ]]
  }),
  'password': ['Password', Validators.required],
  'rememberMe': ['']
});

this.myForm.valueChanges.subscribe(
  (data: any) => console.log(data)
);
}

onSubmit() {
console.log(this.myForm);
}

exampleValidator(control: FormControl): { [s: string]: boolean } {
if (control.value === 'Example') {
  return { example: true };
}
return null;
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

asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
const promise = new Promise<any>(
  (resolve, reject) => {
    setTimeout(() => {
      if (control.value === 'Example') {
        resolve({ 'invalid': true });
      } else {
        resolve(null);
      }
    }, 3000);
  }
);
return promise;
}

}


