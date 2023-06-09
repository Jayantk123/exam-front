import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css'],
})
export class ViewCategoriesComponent implements OnInit {
  categories = [
    {
      cid: '',
      title: '',
      description: '',
    },
  ];
  constructor(private _category: CategoryService) { }

  ngOnInit(): void {
    this._category.categories().subscribe(
      (data: any) => {
        // ?success
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        // erroror
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    );
  }

  deletecategory(cid: any) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure want to delete ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        //  delete
        this._category.deleteCategory(cid).subscribe(
          (data: any) => {
            this.categories = this.categories.filter((categ) => categ.cid != cid);
            Swal.fire(
              'Success !!',
              'Category is deleted successfully',
              'success'
            );

            // window.location.reload();
          },
          (error) => {
            console.log(error);
            Swal.fire('Error !!', 'Server error !!', 'error');
          }
        );
      }
    });
  }
}
