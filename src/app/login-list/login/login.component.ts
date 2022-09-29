import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { customer } from 'src/Modules/Customer';
import { CustomerServiceService } from 'src/services/customer-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cust:customer=new customer();
  cust1:customer=new customer();

  
  loginForm!: FormGroup;

  formSubmit(val:any)
    {
     var name=val.Username;
     var Password=val.password;
    }

  get Username()
  {
    return this.loginForm.get('user');
  }
  get Password()
  {
    return this.loginForm.get('pass');
  }
  
  constructor(private formBuilder: FormBuilder,private customerServiceService:CustomerServiceService,private router:Router) {
    }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      
      user: ['', Validators.required],
      pass:['', Validators.required],
    });
   
    
  }
  verifyCust()
  {
    this.customerServiceService.verifyCustomer(this.cust).subscribe(data=>{
      
      this.cust1=data;
      
    })
  
    if(this.cust1.username=="")
    {
      alert("Invalid credentials");
      this.router.navigate(['login']);
    }
    else{
      this.router.navigate(['home']);
    }
    
  }
}
