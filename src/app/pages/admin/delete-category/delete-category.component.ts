import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  showcateg = [
    {
      cid: '',
      title: '',
      description: '',
    },
  ];

  category = {
    id:'',
  };

  constructor(private _category:CategoryService , private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this._category.categories().subscribe(
      (data:any)=>{
        this.showcateg=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
      )
  }


  delete()
  {
    if(this.category.id==' ' || this.category.id==null)
    {
      
      this._snack.open("Id Required !!",'',{
        duration:3000,
      });
      return;
 }

  // all done ..delete id
  this._category.deleteCategory(this.category.id).subscribe(

    (data:any)=>{
    
     
      Swal.fire("Success !!", 'Category Id: ' + this.category.id + ' is deleted successfully.','success');
    
      this.category.id='';
    
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !!", 'Server error !!','error');
    
    }
    
        )
    
    
      }
    
    }
    