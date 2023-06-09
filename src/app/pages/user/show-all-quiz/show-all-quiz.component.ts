import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-all-quiz',
  templateUrl: './show-all-quiz.component.html',
  styleUrls: ['./show-all-quiz.component.css']
})
export class ShowAllQuizComponent implements OnInit {
  quizzes = [
    {
      qId: '',
      title: '',
      description: '',
      maxMarks: '',
      numberofQuestions: '',
      active: '',
      category: {
        title: '',
      },
    },
  ];

  constructor(private _quiz: QuizService) {}
  ngOnInit(): void {

    this._quiz.getActiveQuizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(this.quizzes);
      },
      (error) => {
        // erroror

        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    );
  }

}
