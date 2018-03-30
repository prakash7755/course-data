import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SiginupComponent } from './siginup/siginup.component';
import { BooksDataComponent } from './books-data/books-data.component';


import { UserAuthService } from './services/user-auth/user-auth.service';
import { BooksDataService } from './services/books-data/books-data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiginupComponent,
    BooksDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserAuthService, BooksDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
