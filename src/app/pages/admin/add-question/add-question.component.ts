import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
 
  constructor(
    private _route:ActivatedRoute,
    private _ques:QuestionService,
    private _router:Router,
    private _snack:MatSnackBar
  ) { }
qId:any=0;
qTitle:any;
texteditor=false;
question={
  quiz:{
qId:'',
  },
  image:'',
  content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  ans:'',
 

}


  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    console.log(this.qId);
    console.log(this.qTitle);
    this.question.quiz.qId=this.qId;
  }


  addques()
  {

    if(this.question.content.trim()=='' || this.question.content==null)
    {
this._snack.open("Question Required !!",'',{
  duration:3000,
});
return;
    }

    if(this.question.option1.trim()=='' || this.question.option1==null)
    {
this._snack.open("Option 1 is Required !!",'',{
  duration:3000,
});
return;
    }

    if(this.question.option2.trim()=='' || this.question.option2==null)
    {
this._snack.open("Option 2 is Required !!",'',{
  duration:3000,
});
return;
    }

    if(this.question.ans.trim()=='' || this.question.ans==null)
    {
this._snack.open("Answer is Required !!",'',{
  duration:3000,
});
return;
    }


this._ques.addQuestion(this.question).subscribe(
  (data:any)=>
  {
    console.log(data);

    Swal.fire( 'Success !!','Question Added Successfully','success').then((e)=>
    {
      this._router.navigate(["'/admin/view-questions'+this.qId+'/'+this.qTitle"])
    })

    this.question.image='';
    this.question.option1='';
    this.question.content='';
      this.question.option2='';
      this.question.option3='';
      this.question.option4='';
      this.question.ans='';
      this.texteditor=false;
     
    
   
    
  },
  (error)=>{
    console.log(error);
    Swal.fire('Error !!', 'Error in adding data !!', 'error');
    
  }
)
  }
}
