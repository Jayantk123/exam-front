import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private _route:ActivatedRoute , 
    private _category:CategoryService ,
    private _quiz:QuizService,
    private _router:Router) { }

  qId=0;
  quiz:any;
  categories = [
    {
      cid: '',
      title: '',
    },
  ];

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


this.qId = this._route.snapshot.params['qid'];
// alert(this.qId);


this._quiz.getQuiz(this.qId).subscribe(
  (data:any)=>
  {
    this.quiz=data;
    console.log(this.quiz);
    
  },
  (error)=>{
    console.log(error);
    Swal.fire('error','Eror in loading data','error');
    
  }
)
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
        this._quiz.updateQuiz(this.quiz).subscribe(
          (data: any) => {
            Swal.fire(
              'Success !!',
              'Quiz is Update successfully',
              'success'
            ).then((e)=>
            {
              this._router.navigate(['/admin/quizzes/'])
            })
            // window.location.reload();
            this.quiz=null;
          },
          (error) => {
            console.log(error);
            Swal.fire('Error !!', 'Error in updating data !!', 'error');
          }
        );
      
      }
    })
  }}
