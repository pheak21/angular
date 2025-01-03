import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { PermissionDirective } from '../directives/permission.directive';
import { TestsModule } from '../tests/tests.module';

@NgModule({
  declarations: [
    LoginComponent,
    PermissionDirective,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TestsModule
  ],
  exports: [
    FormsModule,
    LoginComponent,
    TodoListComponent,
    PermissionDirective,
    TestsModule
  ]
})
export class ShareModule { }
