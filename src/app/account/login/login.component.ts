import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login ={
    user: '',
    password:''
  }

  constructor(private AccountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
      console.log
      const result = await this.AccountService.login(this.login);
      this.router.navigate(['']);
    } catch (error){
      console.error(error);
    }
  }

}
