import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  constructor(public carritoService: CarritoService,private router :Router) {}
  searchText: string ='';

  items: string[]= [
    'Stephen King',
    'Gabriel García Márquez',
    'Cien años de soledad',
    'El resplandor',
    'Cementerio de animales'
  ];

  get filteredItems(): string[] {
    return this.items.filter(item =>
      item.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  menuAbierto = signal(false);

  agregar(producto: any) {
    this.carritoService.agregar(producto);
  }

  eliminar(index: number) {
    this.carritoService.eliminar(index);
  }

  vaciar() {
    this.carritoService.vaciar();
  }

  total() {
    return this.carritoService.total();
  }

  // Alternar menú
  toggleMenu() {
    this.menuAbierto.update(m => !m);
  }
    irADetalle(item: string) {
  
  this.router.navigate(['/libros'], { queryParams: { q: item } });
}

}



