import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  quesId=0;
  questions:any;
  constructor(private _route:ActivatedRoute ,
    private _question:QuestionService,
    private _router:Router,
    ) { }

  ngOnInit(): void {
    this.quesId = this._route.snapshot.params['quesid'];
    // alert(this.quesId);

    this._question.getQuestion(this.quesId).subscribe(
      (data:any)=>{
        this.questions=data;
        console.log(this.questions);
        
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
        this._question.updateQuestion(this.questions).subscribe(
          (data: any) => {
            Swal.fire(
              'Success !!',
              'Quiz is Update successfully',
              'success'
            ).then((e)=>
            {
              this._router.navigate(['/admin/quizzes'])
            })
            // window.location.reload();
            this.questions=null;
          },
          (error) => {
            console.log(error);
            Swal.fire('Error !!', 'Error in updating data !!', 'error');
          }
        );
      
      }
    })
  }}



