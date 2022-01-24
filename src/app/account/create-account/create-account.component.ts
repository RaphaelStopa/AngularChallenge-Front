import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account ={
    login:'',
    email:'',
    password: ''
  }

  constructor(private AccountService: AccountService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try{
      const result = await this.AccountService.createAccount(this.account);
    }catch (error) {
      console.error(error);
  }
}
}
