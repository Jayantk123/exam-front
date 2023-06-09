import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar,
    private router: Router) { }

public user={
  username:'',
  password:'',
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
  profile:'',
};

  ngOnInit(): void {
    this.userService.allproduct().subscribe(
      (data:any)=>{
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }



  formSubmit()
  {
    // alert('submit');
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null)
    {
      // alert('User is required');
      this.snack.open("Username is required !!",'  ',{
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:'center',
      });
      return;
    }
    if(this.user.password=='' || this.user.password==null)
    {
      // alert('User is required');
      this.snack.open("Password is required !!",'  ',{
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:'center',
      });
      return;
    }

    if(this.user.firstName=='' || this.user.firstName==null)
    {
      // alert('User is required');
      this.snack.open("FirstName is required !!",'  ',{
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:'center',
      });
      return;
    }

    if(this.user.lastName=='' || this.user.lastName==null)
    {
      // alert('User is required');
      this.snack.open("LastName is required !!",'  ',{
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:'center',
      });
      return;
    }

    if(this.user.email=='' || this.user.email==null)
    {
      // alert('User is required');
      this.snack.open("Email is required !!",'  ',{
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:'center',
      });
      return;
    }

    if(this.user.phone=='' || this.user.phone==null)
    {
      // alert('User is required');
      this.snack.open("Username is required !!",'  ',{
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:'center',
      });
      return;
    }

    if(this.user.profile=='' || this.user.profile==null)
    {
      this.user.profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDVA_pu9U4m-YPEQY5c9v8nqJHzOPgmopaA&usqp=CAU";
    }


    // addUser:userservice
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        // for success
        console.log(data);
        // alert('success');
        Swal.fire('Successfully Registered','Username ' + data.username + ' is Successfully registered ','success').then((result) => {
          if (result.isConfirmed) {
            // window.location.reload();
              // window.location.href='/user-dashboard';
              this.router.navigate(['login']);

          }}
        )
      },
      (error)=>{
        // for error
        console.log(error);
        // alert('something went wrong');
        this.snack.open('something went wrong','',{
          duration:300,
        })
      }
    );
  }

}
