import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './components/flex/flex.component';
import { GridComponent } from './components/grid/grid.component';



@NgModule({
  declarations: [
    FlexComponent,
    GridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlexComponent,
    GridComponent
  ]
})
export class TestsModule { }
