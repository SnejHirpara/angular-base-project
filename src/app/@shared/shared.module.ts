import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './utils/base.component';



@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule
  ],
  exports: [BaseComponent]
})
export class SharedModule { }
