import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeService } from 'src/app/services/welcome.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {

product1={

  price:20,
  productName:"Rice"
}


currentUser = 
  {
   id:''

  };


  constructor(
    private _route:ActivatedRoute,
    private _addProd:WelcomeService,
    private _router:Router,
    private _snack:MatSnackBar,
    private _currUser: LoginService,
  
    
  ) { }

  ngOnInit(): void {

    this._currUser.getCurrentUser().subscribe(
      (data:any)=>{
        this.currentUser=data;
        console.log(this.currentUser.id);

        
      },
      (error) => {
        // erroror

        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    )
  }




  addprod1()
  {
    this._addProd.addProduct(this.addprod1,this.currentUser.id).subscribe(
      (data:any)=>
      {
        Swal.fire("Success !!", 'Quiz is added successfully','success');
      
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !!", 'Server error !!','error');
      }

    )
  }

}
