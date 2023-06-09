import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {
  categories = [
    {
      cid: '',
      title: '',
    },
  ];


quiz={
  title:'',
  description:'',
  maxMarks:'',
  numberofQuestions:'',
  active:true,
  category:{
    cid:'',
  }
};

  constructor(private _category: CategoryService , private _quiz:QuizService , private _snack:MatSnackBar) {}

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


  addQuiz()
  {
    if(this.quiz.title.trim()=='' || this.quiz.title==null)
    {
this._snack.open("Title Required !!",'',{
  duration:3000,
});
return;
    }

    if(this.quiz.maxMarks=='' || this.quiz.maxMarks==null)
    {
this._snack.open("maxMarks Required !!",'',{
  duration:3000,
});
return;
    }

    if(this.quiz.numberofQuestions=='' || this.quiz.numberofQuestions==null)
    {
this._snack.open("Number Of Questions Required !!",'',{
  duration:3000,
});
return;
    }

    if(this.quiz.category.cid=='' || this.quiz.category.cid==null)
    {
this._snack.open("Category Required !!",'',{
  duration:3000,
});
return;
    }

    // all done ..submit
    this._quiz.addQuiz(this.quiz).subscribe(

(data:any)=>{
 
  Swal.fire("Success !!", 'Quiz is added successfully','success');
  this.quiz.title='';
  this.quiz.description='';
  this.quiz.maxMarks='';
  this.quiz.numberofQuestions='';
  this.quiz.category.cid='';
  // window.location.reload(); 

},
(error)=>{
  console.log(error);
  Swal.fire("Error !!", 'Server error !!','error');

}

    )


  }

}
