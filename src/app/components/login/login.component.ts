import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  @Output() changed = new EventEmitter<number>()

  title: string = 'Login';

  btnText: string = 'Sign In';

  isSignUp: boolean = false;

  phone: string = '';

  registerUser = {
    phone:'',
    rule: ''
  };

  option: string[] = [
    'select rule',
    'admin',
    'user'
  ]

  register(){
    this.isSignUp = true;
    this.title = 'Register';
    this.btnText = 'Sign Up';
  }

  getCheckUser(data: any){
    const user = JSON.parse(localStorage.getItem('user')??'[]');
    if(user){
      const existingItem = user.find((item:any) => item.phone === data?.phone)
      if (!existingItem) {
        user.push(data)
      }
    } else {
      user.push(data)
    }
    localStorage.setItem('user', JSON.stringify(user))
  }

  getRule(rule: string){
   this.registerUser.rule = rule;
  }

  submit(){
    if(this.isSignUp){
      this.registerUser.phone = this.phone
      if(this.registerUser.phone && this.registerUser.rule){
        this.getCheckUser(this.registerUser);
        this.isSignUp = false;
        this.title = 'Login';
        this.btnText = 'Sign In';
      }
    } else {
      const user = JSON.parse(localStorage.getItem('user')??'[]');
      if(user.length !== 0 && this.phone){
        const existingItem = user.find((item:any) => item.phone === this.phone)
        if (existingItem) {
          this.changed.emit(existingItem);
          
          this.authService.login(existingItem.rule).subscribe(success => {
            if (success) {
              console.log('Login successful');
            } else {
              console.log('Login failed');
            }
          });
        }
      }
    }
  }

  logout(): void {
    this.authService.logout();
  }

}
