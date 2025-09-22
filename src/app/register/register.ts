import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ FormsModule ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  mensaje = '';

  constructor(private router: Router) {}

  registrar() {
    if (!this.username || !this.password) {
      this.mensaje = 'Completa todos los campos';
      return;
    }
    // Guardar usuario en LocalStorage (simulando base de datos)
    const user = { username: this.username, password: this.password };
    localStorage.setItem('usuario_registrado', JSON.stringify(user));
    this.mensaje = 'Registro exitoso. Ahora inicia sesión.';
    setTimeout(() => this.router.navigate(['/login']), 1500);
  }

}
