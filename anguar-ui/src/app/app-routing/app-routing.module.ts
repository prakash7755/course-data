import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';



import { LoginComponent } from '../login/login.component';
import { SiginupComponent } from '../siginup/siginup.component';
import { BooksDataComponent } from '../books-data/books-data.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SiginupComponent },
  { path: 'books', component: BooksDataComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
