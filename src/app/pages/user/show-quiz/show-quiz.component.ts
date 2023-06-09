import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.css']
})
export class ShowQuizComponent implements OnInit {

  cid=0;
 ctitle:any;
  quizbycateg=[
{
    qId:'',
    title:'',
    description:'',
    maxMarks:'',
    numberofQuestions:'',
    active:false,
    category:{
      cid:'',
      title:'',
      description:'',
    },
  }
  ];

   active=false;
 

  constructor(
    private _route: ActivatedRoute,
    private _quiz:QuizService,
  ) { }

  ngOnInit(): void {
    // this.cid = this._route.snapshot.params['cid'];
   
    // console.log(this.cid);

    this._route.params.subscribe((params)=>
    {
      this.cid=params['cid'];
      this.ctitle=params['ctitle']
      this._quiz.getActiveQuizzesOfcategory(this.cid).subscribe(
        (data:any)=>{
          this.quizbycateg=data;
       
          console.log(this.quizbycateg);
      
          
        },
        (error)=>{
          console.log(error);
          alert("Error in loading data");
          
        }
      )
      
      
          
        
    })
    // alert(this.cid);

    // this.quizbycateg=[];
  }

}
