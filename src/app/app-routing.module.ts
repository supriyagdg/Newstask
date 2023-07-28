import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './myComp/news/news.component';
import { UsComponent } from './myComp/us/us.component';
import { GermanComponent } from './myComp/german/german.component';

const routes: Routes = [
  {path:"", component:NewsComponent},
  {path:"us", component:UsComponent},
  {path:"germany", component:GermanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
