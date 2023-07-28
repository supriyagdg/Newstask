import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './myComp/news/news.component';
import { HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './myComp/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { UsComponent } from './myComp/us/us.component';
import { GermanComponent } from './myComp/german/german.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NavbarComponent,
    UsComponent,
    GermanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
