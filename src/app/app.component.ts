import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  isLogin: boolean = false;

  getLogin(login: any) {
    if(Object.keys(login).length > 0) {
      this.isLogin = true;
    }
  }
}
