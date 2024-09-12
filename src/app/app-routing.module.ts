import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_LEVEL_ROUTES: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(APP_LEVEL_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
