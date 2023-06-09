import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  // user={
    
  //   id:'',
  //   username:'',
  //   password:'',

  //     "id": 29,
  //     "username": "jayantk237",
  //     "password": "$2a$10$3tzlj2pDsF6VbwYpUhTZX.rrZzMwaBcjRyUvooKFieF7tG3jnomJq",
  //     "firstName": "Jayant",
  //     "lastName": "Kumar",
  //     "email": "jayantk237@gmail.com",
  //     "phone": "9971452952",
  //     "enabled": true,
  //     "profile": "https://media-exp1.licdn.com/dms/image/C4E03AQEum3jic37WuA/profile-displayphoto-shrink_400_400/0/1631429155243?e=1646265600&v=beta&t=Pzgj-GzEkbgFXUaqzOQPLI02f1MqLhtrbebY38H7x4o",
  //     "accountNonLocked": true,
  //     "authorities": [
  //         {
  //             "authority": "Admin"
  //         }
  //     ],
     
  
  // };


  constructor(public login:LoginService,
    private _profile:ProfileService,
    ) { }

  ngOnInit(): void {

    this.user=this.login.getUser();

    // this.user=this._profile.getUser(this.login.getUser().id);

  }

}
