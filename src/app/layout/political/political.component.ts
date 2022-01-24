import { Political } from './../../shared/model/political.model';
import { PoliticalService } from './../../shared/service/political.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-political',
  templateUrl: './political.component.html',
  styleUrls: ['./political.component.css']
})
export class PoliticalComponent implements OnInit {
  politicst: Political[];

  //da para apagar
  politicst2: Political;

  constructor(public politicalService: PoliticalService,  private router: Router,) { }

  ngOnInit(): void {
    this.politicalService.getAll().subscribe((data) => {
      this.politicst = data.content;
      console.log(data.content);

    })
  }

  //dapa apagar
  getPolitics() {
    this.politicalService.getAll().subscribe((data) => {
      this.politicst = data.content;
    })
  }

  deleteProduct(id: number): void {
    this.politicalService.delete(id).subscribe(() => {
      this.router.navigate(["/politico"]);
    });
  }

}
