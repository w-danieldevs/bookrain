import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Nav } from './shared/components/nav/nav';
import { Footer } from "./shared/components/footer/footer";                   

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primero');
}

