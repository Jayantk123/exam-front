import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId=0;
  qTitle:any;
  questions=[
    {
      quesId:'',
      content:'',
      image:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      ans:'',
      quiz: {
        qId: '',
        title: '',
        description: '',
        maxMarks: '',
        numberofQuestions: '',
        active: '',
        category: {
          cid:'',
          title: '',
          description:'',
        },
      },
    }
  ];
  constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService,
  ) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    console.log(this.qId);
    console.log(this.qTitle);
    
    this._question.getQuestionsofQuiz(this.qId).subscribe(
(data:any)=>{
  console.log(data);
  this.questions=data;
  
},
(error)=>{
  console.log(error);
  
}
    )

  };

  delete(quesId:any)
  { Swal.fire({
    icon: 'warning',
    title: 'Are you sure want to delete ?',
    confirmButtonText: 'Delete',
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      //  delete
      // console.log(quesId);
      
    this._question.deleteQuestion(quesId).subscribe(
      (data:any)=>
      {
        this.questions = this.questions.filter((quess) => quess.quesId != quesId);
      Swal.fire('Success !!','Question deleted successfully','success');
        console.log(data);
        // error in deleting 
        
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
