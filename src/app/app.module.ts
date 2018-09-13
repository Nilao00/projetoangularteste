import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CadfichaComponent } from './cadficha/cadficha.component';
import { EditfichaComponent } from './editficha/editficha.component';
import { RouterModule, Routes } from '@angular/router';
import { CadanimalComponent } from './cadanimal/cadanimal.component';
import { EditanimalComponent } from './editanimal/editanimal.component';
import { HomeComponent } from './home/home.component';
import {TesteService} from  './teste.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
{ path: '', component: HomeComponent},
{path:'home',component:HomeComponent},
{path:'cadficha',component:CadfichaComponent},
{path:'editficha',component:EditfichaComponent},
{path:'cadanimal',component:CadanimalComponent},
{path:'editanimal',component:EditanimalComponent},

{ path: '**', redirectTo: 'home' }
];
@NgModule({
  declarations: [
    AppComponent,
    CadfichaComponent,
    EditfichaComponent,
    CadanimalComponent,
    EditanimalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
      HttpClientModule,
      FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [

  TesteService


],
  bootstrap: [AppComponent]
})
export class AppModule { }
