import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  constructor(
    private _result:ResultService,
    public login:LoginService,
  ) { }

 results:any;


  ngOnInit(): void {

this._result.getallResult().subscribe(
  (data:any)=>{

    // data.forEach((e:any) => {

    //   // console.log(e.username+" "+this.login.getUser().username);
      
    //   // if(e.username==(this.login.getUser().username))
    //   // {
    //   //   this.results.push(e);
       
        
    //   // }
    //   this.results=
      
    // });

    this.results=data;

  }
  
)
console.log(this.results);

  }

}
