import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  qId=0;
  quiz:any;
  constructor( private _route:ActivatedRoute,
    private _quiz: QuizService,
    private _ques:QuestionService,
    private _router:Router) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    // alert(this.qId);


    this._quiz.getQuiz(this.qId).subscribe(
      (data)=>{
        this.quiz=data;
        // console.log(data);
        
      },
      (error)=>{
        console.log(error);
        alert("Error in loading data");
        
      }
    )
  }

  startquiz()
  {
    Swal.fire({
      title:'Do you want to start the quiz?',
      showCancelButton:true,
      confirmButtonText:'Start',
      denyButtonText:`Don't save`,
      icon:'info',
    }).then((result)=>{
      if(result.isConfirmed){
        // if(this._ques.getQuestionsofQuizForTest(this.qId))
        // this._router.navigate(['/start/'+this.qId]);
        this._router.navigate([]).then(result => {  window.open( `/start/${this.qId}`, '_blank','location=yes,scrollbars=yes,status=yes'); });
      }
    })
  }

}
