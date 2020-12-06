import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from '../services/auth/auth.service';
import { StorageService } from '../services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  errors: any[] = [];


  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
    private storageService: StorageService,
    private router: Router) {

   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })


  }

  get f() { return this.loginForm.controls; }


  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value).subscribe((user) => {
      this.errors = [];
      this.storageService.setData('userData', user);
      this.router.navigate(['/student/home']);
    }, (error) => {
      if(error.error.hasOwnProperty('non_field_errors')) {
        this.errors = error.error.non_field_errors;
      }
      console.log('error', error);
    });

    this.socialAuthService.authState.subscribe((user) => {
      console.log('user login', user)
    });

  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      console.log('user', user)
    }).catch((error) => {
      console.log('error', error)
    });
  }
 
  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {
      console.log('user', user)
    }).catch((error) => {
      console.log('error', error)
    });
  }
 

}
