import { AppComponent } from './app.component';
import { CadfichaComponent } from './cadficha/cadficha.component';
import { EditfichaComponent } from './editficha/editficha.component';
import { RouterModule, Routes } from '@angular/router';
import { CadanimalComponent } from './cadanimal/cadanimal.component';
import { EditanimalComponent } from './editanimal/editanimal.component';
import { HomeComponent } from './home/home.component';





const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'home',component:HomeComponent},
{path:'cadficha',component:CadfichaComponent},
{path:'editficha/:id',component:EditfichaComponent},
{path:'cadanimal',component:CadanimalComponent},
{path:'editanimal',component:EditanimalComponent},

{ path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(routes);
