import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

  getRule(rule: string){
   this.registerUser.rule = rule;
  }

  submit(){
    if(this.isSignUp){
      this.registerUser.phone = this.phone
      if(this.registerUser.phone && this.registerUser.rule){
        localStorage.setItem('user', JSON.stringify(this.registerUser))
        this.isSignUp = false;
        this.title = 'Login';
        this.btnText = 'Sign In';
      }
    } else {
      const user = JSON.parse(localStorage.getItem('user')??'{}');
      if(Object.keys(user).length !== 0){
        
      }
    }
  }

}
