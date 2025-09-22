import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../shared/services/carrito.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.html',
  styleUrls: ['./libros.css'],
  standalone: true,
  imports: [CommonModule]
})
export class LibrosComponent {
  libros = [
    {
      titulo: 'It',
      autor: 'Stephen King',
      precio: 65000,
      imagen: '/libros/it.jpeg',
      descripcion: 'Una novela de terror sobre un ser que aterroriza a un grupo de amigos.'
    },
    {
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      precio: 58000,
      imagen: '/libros/cienAños.jpeg',
      descripcion: 'La historia de la familia Buendía en el mítico pueblo de Macondo.'
    },
    {
      titulo: 'El resplandor',
      autor: 'Stephen King',
      precio: 72000,
      imagen: 'libros/resplandor.jpeg',
      descripcion: 'Un hotel aislado, un invierno helado y un padre con una oscura influencia.'
    },
    {
      titulo: 'El Principito',
      autor: 'Antoine de Saint-Exupéry',
      precio: 50000,
      imagen: 'libros/principito.jpeg',
      descripcion: 'Una historia poética sobre la amistad, el amor y la pérdida.'
    }
    
  ];

  constructor(public carritoService: CarritoService) {}

  comprar(libro: any) {
    this.carritoService.agregar(libro);
  }
}
