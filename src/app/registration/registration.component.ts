import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { AuthService } from '../services/auth/auth.service';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  submitted = false;
  errors: any[] = [];


  constructor(private formBuilder: FormBuilder, private authService: AuthService, private socialAuthService: SocialAuthService, private storageService: StorageService) {

  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })

    this.socialAuthService.authState.subscribe((user) => {
      console.log('user login', user)
    });

  }

  get f() { return this.registrationForm.controls; }


  signUp() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    const userInfo = {
      email: this.registrationForm.get('email').value,
      password2: this.registrationForm.get('confirmPassword').value,
      password1: this.registrationForm.get('password').value,
    }
    this.onRegisterHandler(userInfo);
  }

  signUpWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      console.log('user', user)
      const userInfo = {
        email: user.email,
        firstname: user.firstName,
      }
      this.onRegisterHandler(userInfo)
    }).catch((error) => {
      console.log('error', error)
    });
  }

  signUpWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {
      const userInfo = {
        email: user.email,
      }
      this.onRegisterHandler(userInfo)
    }).catch((error) => {
      console.log('error', error)
    });
  }

  // void
  onRegisterHandler(data: any): void {
    this.authService.registration(data).subscribe((user) => {
      this.registrationForm.reset();
      this.registrationForm.get('email').clearValidators();
      this.registrationForm.get('email').updateValueAndValidity();
      this.registrationForm.get('password').clearValidators();
      this.registrationForm.get('password').updateValueAndValidity()
      this.registrationForm.get('confirmPassword').clearValidators();
      this.registrationForm.get('confirmPassword').updateValueAndValidity()
      this.storageService.setData('userData', user);
      this.errors = [];
    }, (errors) => {
      Object.keys(errors.error).map(k => this.errors = [...this.errors, ...errors.error[k]])
    })
  }


}
