import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBreakComponent } from './button-break/button-break.component';
import { CountComponent } from './count/count.component';


@NgModule({
  declarations: [ButtonBreakComponent, CountComponent,],
  imports: [
    CommonModule
  ],
  exports: [ButtonBreakComponent]
})
export class SharedModule { }
