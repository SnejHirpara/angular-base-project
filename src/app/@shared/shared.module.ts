import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './utils/base.component';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    InputTextModule
  ],
  exports: [BaseComponent, InputTextModule]
})
export class SharedModule { }
