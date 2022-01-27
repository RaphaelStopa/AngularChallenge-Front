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
    username:'',
    password:''
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.accountService.access();
  }

  async onSubmit(){
    try{
      this.accountService.login(this.login);
      await new Promise(r => setTimeout(r, 2000));
      this.router.navigate(['']);
    } catch (error){
      console.error(error);
    }
  }
}
