import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {

  user:any;

  constructor(public login:LoginService,
    private _profile:ProfileService,
    ) { }

  ngOnInit(): void {

    this.user=this.login.getUser();

    // this.user=this._profile.getUser(this.login.getUser().id);

  }


  update()
  {
    alert("sdas");
  }
}
