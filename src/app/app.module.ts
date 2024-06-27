import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { TestsModule } from './tests/tests.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShareModule,
    TestsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
