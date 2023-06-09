import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }

  public getQuestionsofQuiz(qid:any)
  {
return this._http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }


  public getQuestionsofQuizForTest(qid:any)
  {
return this._http.get(`${baseUrl}/question/quiz/${qid}`);
  }
  
  public addQuestion(data:any)
  {
    return this._http.post(`${baseUrl}/question/`,data);
  }

  // get ques by quesId
  public getQuestion(qId:any)
  {
    return this._http.get(`${baseUrl}/question/${qId}`);
  }

  // update
  public updateQuestion(data:any)
  {
    return this._http.put(`${baseUrl}/question/`,data);
  }

  // delete ques
  public deleteQuestion(quesId:any)
  {
    return this._http.delete(`${baseUrl}/question/${quesId}`);
  }

//eval quiz
public evalQuiz(questions:any)
{
  return this._http.post(`${baseUrl}/question/eval-quiz`,questions)
}
}
