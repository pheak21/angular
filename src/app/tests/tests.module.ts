import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './components/flex/flex.component';
import { GridComponent } from './components/grid/grid.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    FlexComponent,
    GridComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  exports: [
    FlexComponent,
    GridComponent,
    SelectComponent
  ]
})
export class TestsModule { }
