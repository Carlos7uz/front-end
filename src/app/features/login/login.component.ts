import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    NgxSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);
  private readonly spinner = inject(NgxSpinnerService);



  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(){

  }


  onSubmit(){
    const emailValue = this.loginForm.get('email')?.value as string;

    if(emailValue && emailValue.toLowerCase().includes('adm')){
      this.spinner.show();
      setTimeout(() => {
        this.router.navigate(['/inc-home']);
        this.spinner.hide();
      }, 3000);
    } else if (this.loginForm.valid) {
      this.spinner.show();
      setTimeout(() => {
        this.router.navigate(['/jobs']);
        this.spinner.hide();
      }, 3000);
    } else {
      this.spinner.hide();
      this.snackBar.open('Please fill in all fields correctly.', 'Close', {
        duration: 3000,
      });
    }
  }

}
