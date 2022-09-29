import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { admin } from 'src/Modules/Admin';
import { AdminServiceService } from 'src/services/admin-service.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminobj:admin=new admin();
  adminobj1:admin=new admin();

  AdminloginForm!:FormGroup

  formSubmit(val:any)
    {
     var name=val.Username;
     var Password=val.password;
    }

  get Username()
  {
    return this.AdminloginForm.get('user');
  }
  get Password()
  {
    return this.AdminloginForm.get('pass');
  }
  
  constructor(private formBuilder: FormBuilder,private adminService:AdminServiceService,private router:Router) { }

  ngOnInit(): void {
    this.AdminloginForm= this.formBuilder.group({
      
      user: ['', Validators.required],
      pass:['', Validators.required],
  
    });
  }
  verifyadmin()
  {
    this.adminService.verifyAdmin(this.adminobj).subscribe(data=>{
      
      this.adminobj1=data;
      
    })
  
    if(this.adminobj1.username=="")
    {
      alert("Invalid credentials");
      this.router.navigate(['app-admin-login']);
    }
    else{
      this.router.navigate(['admin-dash']);
    }
    
  }

}
