import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isLoggedIn=true;
  categ:any;
  constructor(public login:LoginService,
    private _category:CategoryService) { }

  ngOnInit(): void {

    this._category.categories().subscribe(
      (data:any)=>{
this.categ=data;
console.log(this.categ);

      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Error in loading categories from server','error');
        
      }
    )

  }

  public logout()
  {
    this.login.logout();
  this.isLoggedIn=false;
    window.location.reload(); 
    // this.login.loginStatusSubject.next(false);
  }

}
