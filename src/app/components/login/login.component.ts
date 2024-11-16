import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    Nombre_log: new FormControl('', Validators.required),
    contr_usr: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.loginForm.valid) {
      const data = {
        email: this.loginForm.value.Nombre_log,
        password: this.loginForm.value.contr_usr,
      };
      this.authService.login(data).subscribe({
        next: (res: any) => {
          this.authService.setToken(res.token);
          this.router.navigateByUrl('/');
        },
        error: () => {},
      });
    }
  }
}
