import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ FormsModule,RouterModule ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';
  mensaje = '';

  constructor(private router: Router) {}

  login() {
    const data = localStorage.getItem('usuario_registrado');
    if (!data) {
      this.mensaje = 'No hay usuarios registrados';
      return;
    }

    const user = JSON.parse(data);
    if (this.username === user.username && this.password === user.password) {
      localStorage.setItem('usuario_activo', this.username);
      this.router.navigate(['/user']);
    } else {
      this.mensaje = 'Usuario o contraseña incorrectos';
    }
  }

}
