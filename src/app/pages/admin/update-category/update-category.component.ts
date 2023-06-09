import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent implements OnInit {
  cid = 0;
  category: any;

  constructor(
    private _category: CategoryService,
    private _snack: MatSnackBar,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cid = this._route.snapshot.params['cid'];
    this._category.getCategory(this.cid).subscribe(
      (data: any) => {
        this.category = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    );
  }


  updateform()
  {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure want to Update ?',
      confirmButtonText: 'Update',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this._category.updateCategory(this.category).subscribe(
          (data: any) => {
            Swal.fire(
              'Success !!',
              'Category is Update successfully',
              'success'
            ).then((e)=>
            {
              this._router.navigate(['/admin/categories/'])
            })
            // window.location.reload();
            this.category=null;
          },
          (error) => {
            console.log(error);
            Swal.fire('Error !!', 'Error in updating data !!', 'error');
          }
        );
      
      }
    })
  }}

