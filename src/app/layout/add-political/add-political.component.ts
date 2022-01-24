import { Political } from './../../shared/model/political.model';
import { PoliticalService } from './../../shared/service/political.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-political',
  templateUrl: './add-political.component.html',
  styleUrls: ['./add-political.component.css']
})
export class AddPoliticalComponent implements OnInit {


  selecionado = false;

  political ={
    name:'',
    cpf:'',
    electivePositionType: '',
    isLeader: this.selecionado
  }


  constructor(private politicalService: PoliticalService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try{
      const result = await this.politicalService.create(this.political);
    }catch (error) {
      console.error(error);
  }

}
}
