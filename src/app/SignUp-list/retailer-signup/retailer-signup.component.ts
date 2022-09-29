import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-retailer-signup',
  templateUrl: './retailer-signup.component.html',
  styleUrls: ['./retailer-signup.component.css']
})
export class RetailerSignupComponent implements OnInit {

  signupRetailerForm = new FormGroup({
    Username: new FormControl('',Validators.required),
    Password: new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required)
    

  });

  formSubmit(val:any)
    {
     var name=val.Username;
     var Password=val.password;
    }

  get Username()
  {
    return this.signupRetailerForm.get('Username');
  }
  get Password()
  {
    return this.signupRetailerForm.get('Password');
  }
  get address()
  {
    return this.signupRetailerForm.get('address');
  }
  get phone()
  {
    return this.signupRetailerForm.get('phone');
  }
  get name()
  {
    return this.signupRetailerForm.get('name');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
