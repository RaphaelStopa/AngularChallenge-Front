
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoliticalParty } from 'src/app/shared/model/politicalParty.model';
import { PoliticalService } from 'src/app/shared/service/political.service';

@Component({
  selector: 'app-edit-political',
  templateUrl: './edit-political.component.html',
  styleUrls: ['./edit-political.component.css']
})
export class EditPoliticalComponent implements OnInit {

  constructor(private politicalService: PoliticalService, private route: ActivatedRoute) { }

  political ={
    id: 0,
    name:'',
    cpf:'',
    electivePositionType: '',
    politicalParty: {
      id: 0,
      name: '',
      acronym: ''
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.politicalService.readById(parseInt(id)).subscribe(poli =>
      {
        this.political = poli
      });
  }

  onSubmit(): void {
    this.politicalService.update(this.political).subscribe()
  }
}
