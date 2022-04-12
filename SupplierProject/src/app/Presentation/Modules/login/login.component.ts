import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../Core/Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }
  loginForm!: FormGroup;
  responsedata: any
  // isSubmitted  =  false;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { return this.loginForm.controls; }
  
  onSubmit() {    
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.authService.proceedLogin(this.loginForm.value).subscribe(res => {
        this.responsedata = res;
        console.log("1111111111111",res)
        console.log("2222222222",this.responsedata.token)
        localStorage.setItem("token", this.responsedata.token);
        this.router.navigateByUrl('home')
      },
        err => {
          alert("Login Failed")
          this.loginForm.reset();
        }
      );

    }

  }

}
