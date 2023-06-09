import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLoggedIn=true;
  constructor(public login:LoginService) { }

  ngOnInit(): void {
  }

  public logout()
  {
    this.login.logout();
  this.isLoggedIn=false;
    window.location.reload(); 
    // this.login.loginStatusSubject.next(false);
  }
}
