import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  result:any;
  constructor(
    private _result:ResultService
  ) { }

  ngOnInit(): void {

    this._result.getallResult().subscribe(
      (data:any)=>{
        this.result=data;
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )

  }

  print()
  {
    window.print();
  }
}
