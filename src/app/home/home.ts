import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../shared/services/carrito.service';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';



@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  constructor(public carritoService: CarritoService) {}
  // Método para agregar un producto al carrito
  agregarAlCarrito(producto: any) {
    this.carritoService.agregar(producto);
  }
  imagenes = [
    '/carrusel/baner1.png',
    '/carrusel/banner2.png',
    '/carrusel/banner3.png',
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.imagenes.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.imagenes.length) % this.imagenes.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  // Cambio automático cada 4s
  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

 autores = [
    {
      nombre: 'Stephen King',
      img: '/autores/stephen.png',
      descripcion:
        'es un escritor estadounidense de novelas de terror, ficción sobrenatural, misterio, ciencia ficción y literatura fantástica. Sus libros han vendido más de 500 millones de ejemplares,​y en su mayoría han sido adaptados al cine y a la televisión. Ha publicado 65 novelas, once colecciones de relatos y novelas cortas, y siete libros de no ficción, además de un guion cinematográfico, entre otras obras. Ha escrito bajo los seudónimos Richard Bachman y John Swithen. King ha recibido numerosos premios por su trabajo, entre ellos el Bram Stoker, el World Fantasy, el British Fantasy y el O. Henry. En 2003, la revista Time lo incluyó en su lista de las 100 personas más influyentes del mundo.',
    },
    {
      nombre: 'Gabriel García Márquez',
      img: '/autores/gabriel.png',
      descripcion:
        'reconocido mundialmente por su contribución al realismo mágico y al Boom Latinoamericano. Ganador del Premio Nobel de Literatura en 1982, su obra más célebre, Cien años de soledad, es considerada un clásico de la literatura y marcó un hito literario, llevando la literatura latinoamericana a un reconocimiento global. Su estilo narrativo, caracterizado por la mezcla de lo fantástico y lo cotidiano, ha influido en numerosos escritores y ha dejado una huella imborrable en la literatura universal. ',
    },
  ];
}
