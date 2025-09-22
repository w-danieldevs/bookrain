import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [ RouterModule ],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent implements OnInit {
  usuario: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.usuario = localStorage.getItem('usuario_activo');
    if (!this.usuario) this.router.navigate(['/login']);
  }

  logout() {
    localStorage.removeItem('usuario_activo');
    this.router.navigate(['/login']);
  }
}
