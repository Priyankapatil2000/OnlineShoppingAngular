import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm = new FormGroup({
    Id: new FormControl('',Validators.required),
    Firstname: new FormControl('',Validators.required),
    Lastname: new FormControl('',Validators.required),
    Username: new FormControl('',Validators.required),
    Password: new FormControl('',Validators.required),
    Mobile: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    Address: new FormControl(''),

  });

  get Id()
  {
    return this.signupForm.get('Id');
  }
  get Firstname()
  {
    return this.signupForm.get('Firstname');
  }
  get Lastname()
  {
    return this.signupForm.get('Lastname');
  }
  get Username()
  {
    return this.signupForm.get('Username');
  }
  get Password()
  {
    return this.signupForm.get('Password');
  }
  get Mobile()
  {
    return this.signupForm.get('Mobile');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
