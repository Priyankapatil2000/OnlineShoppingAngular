import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { retailers } from 'src/Modules/Retailer';
import { RetailerServiceService } from 'src/services/retailer-service.service';

@Component({
  selector: 'app-retailer-login',
  templateUrl: './retailer-login.component.html',
  styleUrls: ['./retailer-login.component.css']
})
export class RetailerLoginComponent implements OnInit {


  retailerobj :retailers=new retailers();
  retailerobj1 :retailers=new retailers();

  RetailerloginForm!:FormGroup

  

  formSubmit(val:any)
    {
     var name=val.Username;
     var Password=val.password;
    }

  get Username()
  {
    return this.RetailerloginForm.get('user');
  }
  get Password()
  {
    return this.RetailerloginForm.get('pass');
  }

  constructor(private formBuilder: FormBuilder, private retailerService:RetailerServiceService,private router:Router) { }

  ngOnInit(): void {
    this.RetailerloginForm = this.formBuilder.group({
      user: new FormControl('',Validators.required),
      pass: new FormControl('',Validators.required)
    });
  }

  verifyRetailer()
  {
    this.retailerService.verifyRetailer(this.retailerobj).subscribe(data=>{
      this.retailerobj1=data;
    })
  
    if(this.retailerobj1.username=="")
    {
      alert("Invalid credentials");
      this.router.navigate(['app-retailer-login']);
    }
    else{
      this.router.navigate(['retailer-dash']);
    }
    
  }

}
