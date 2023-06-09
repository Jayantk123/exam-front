import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuestionService } from 'src/app/services/question.service';
import { ResultService } from 'src/app/services/result.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  qId=0;
  questions:any;

// config
marksGot=0;
correctAns=0;
attempted=0;;
timer:any;
totalques=0;
totalmarks=0;


result={

userid:'',
username:'',
firstname:'',
lastname:'',
catid:'',
catname:'',
quizid:'',
quizname:'',
totalmarks:'',
marksgot:'',
totalques:'',
quesatt:'',
correctans:'',

};

isSubmit=false;
  constructor(
    private _route:ActivatedRoute,
    private _locationSt:LocationStrategy,
    private _question:QuestionService,
    public login:LoginService,
    private _result:ResultService,
  ) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    // alert(this.qId);
    this.preventBackButton();

    this._question.getQuestionsofQuizForTest(this.qId).subscribe(
      (data)=>{
        this.questions=data;
        console.log(data);

        this.timer=this.questions.length*2*60;

        this.questions.forEach((q:any)=>{
         
        });
        this.startTimer();
        
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !!","Error in loading Questions of Quiz",'error');

        
      }
    )

  }

  preventBackButton()
  {
    history.pushState(null,'',location.href);
    this._locationSt.onPopState(()=> {
      history.pushState(null,'',location.href);
    })
  }

submitQuiz()
{
 
  Swal.fire({
    title:'Do you want to Submit the quiz?',
    showCancelButton:true,
    confirmButtonText:'Submit',
   
    icon:'info',
  }).then((e)=>{
    if(e.isConfirmed){
    
    
      this.evalQuiz();
      
// console.log("correct ans"+this.correctAns+"cc"+this.marksGot+"attempt "+this.attempted);
// alert("Correct answer: "+this.correctAns+"   Marks got: "+this.marksGot+"attempt "+this.attempted);

    }
  })
}


startTimer()
{
  let t=window.setInterval(()=>{
    // hrr ek sec. m call krega

    if(this.timer<=0)
    {
      this.evalQuiz();
      clearInterval(t);
    }
    else
    {
      this.timer--;
    }
  },1000)
}


formatTime()
{
  let min = Math.floor(this.timer/60);
  let sec = this.timer-min*60;

  return `${min} min : ${sec} sec`;

}

evalQuiz()
{
 
//       // console.log(this.questions[0].givenAnswer+"fd"+this.questions.answer);
      

// this.questions.forEach((q:any)=>{

//   // console.log(q.givenAnswer+"dfdf"+q.ans);
  
//   if(q.givenAnswer==q.ans)
//   {
//     ++this.correctAns;
//     let singlemarks=this.questions[0].quiz.maxMarks/this.questions.length;
//     this.marksGot+=singlemarks;
//   //  console.log("loop work");
   
    
//   }

//   if(q.givenAnswer.trim()!='')
//   {
//     this.attempted++;
//   }

 
  
// })


// checking on server side

this._question.evalQuiz(this.questions).subscribe(
  (data:any)=>{
 
    // console.log(data);
    this.marksGot=data.marksGot;
    this.correctAns=data.correctAnswers;
    this.attempted=data.Attempted;
    this.totalques=data.Totalques;
    this.totalmarks=data.Totalmarks
    this.isSubmit=true;
    // console.log(data.Attempted);

    this.result.totalmarks=data.Totalmarks;
    this.result.marksgot=data.marksGot;
    this.result.totalques=data.Totalques;
    this.result.quesatt=data.Attempted;
    this.result.correctans=data.correctAnswers;
    this.result.catid=this.questions[0].quiz.category.cid;
    this.result.catname=this.questions[0].quiz.category.title;
    this.result.quizid=this.questions[0].quiz.qId;
    this.result.quizname=this.questions[0].quiz.title;
    this.result.userid=this.login.getUser().id;
    this.result.username=this.login.getUser().username;
    this.result.firstname=this.login.getUser().firstName;
    this.result.lastname=this.login.getUser().lastName;



    console.log(this.result);
    
    this._result.addresult(this.result).subscribe(
      (data:any)=>{
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
    

    
  },
  (error)=>{
    console.log(error);
    
  }
)
}

printPage()
{

 window.print();

}
}
