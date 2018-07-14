import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-lg bg-light">
  <div><a href='signup'>Signup</a></div><div>/</div>
  <div><a href='login'>login</a></div></nav>
  <div class="container">
    <div class="row">
     <div class="col-md-6 col-md-offset-3">
      <h1>Login</h1>
      <app-login></app-login>
      <hr>
    </div>
  </div>
</div>`
})
export class AppComponent {
  title = '';
}
