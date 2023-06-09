import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public quizzes()
  {
    return this._http.get(`${baseUrl}/quiz/`);
  }

public addQuiz(data:any)
{
  return this._http.post(`${baseUrl}/quiz/`,data);
}

public deleteQuiz(qid:any)
{
  return this._http.delete(`${baseUrl}/quiz/${qid}`);
}

// get quiz by id

public getQuiz(qid:any)
{
  return this._http.get(`${baseUrl}/quiz/${qid}`);
}

// update quiz

public updateQuiz(data:any)
{
  return this._http.put(`${baseUrl}/quiz/`,data);

}

// get quiz by category id
public getQuizbyCatId(catid:any)
{
  return this._http.get(`${baseUrl}/quiz/category/${[catid]}`);
}


// get all active quizes
public getActiveQuizzes()
{
  return this._http.get(`${baseUrl}/quiz/active`);
}


// get active quiz of category

public getActiveQuizzesOfcategory(cid:any)
{
  return this._http.get(`${baseUrl}/quiz/category/active/${cid}`);
}
}
