import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);

  errorMessage = signal<string>('');

  loginForm = new FormGroup({
    cedula: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    contrasena: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  private demoUsers = [
    { cedula: '402-1234567-8', pass: '123456', nombre: 'Ana Lucía Peralta' },
    { cedula: '001-7654321-0', pass: '123456', nombre: 'Miguel Ángel Santos' }
  ];

  onLogin() {
    if (this.loginForm.invalid) return;

    const { cedula, contrasena } = this.loginForm.getRawValue();

    const userFound = this.demoUsers.find(
      u => u.cedula === cedula && u.pass === contrasena
    );

    if (userFound) {
      localStorage.setItem('userSession', JSON.stringify(userFound));

      // Redirección hacia tu componente Lobby
      this.router.navigate(['/dashboard/overview/lobby']); 
    } else {
      this.errorMessage.set('Cédula o contraseña incorrectos.');
    }
  }
}