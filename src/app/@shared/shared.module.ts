import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './utils/base.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PrimengModule } from './modules/primeng/primeng.module';



@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [BaseComponent, PrimengModule]
})
export class SharedModule { }
