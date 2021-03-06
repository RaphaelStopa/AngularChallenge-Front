import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account ={
    login:'',
    cpf: '',
    email:'',
    password: ''
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try{
      await this.accountService.createAccount(this.account);
    }catch (error) {
      alert("Parece que houve um erro. Verifique os campos.");
      console.error(error);
  }
}
}
