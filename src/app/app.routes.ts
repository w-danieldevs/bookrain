import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Ayuda } from './ayuda/ayuda';
import { LibrosComponent } from './libros/libros';
import { RegisterComponent } from './register/register';
import { UserComponent } from './user/user';


export const routes: Routes = [
    { path: '', component : Home},
    { path: 'login', component : Login},
    { path: 'ayuda', component : Ayuda},
    { path: 'libros', component: LibrosComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'user', component: UserComponent }

];
