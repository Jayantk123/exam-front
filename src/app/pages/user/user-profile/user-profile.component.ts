import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:any;

  constructor(public login:LoginService,
    private _profile:ProfileService,
    ) { }

  ngOnInit(): void {

    this.user=this.login.getUser();

    // this.user=this._profile.getUser(this.login.getUser().id);

  }

}
