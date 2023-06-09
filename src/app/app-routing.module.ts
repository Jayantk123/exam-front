import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DeleteCategoryComponent } from './pages/admin/delete-category/delete-category.component';
import { ResultsComponent } from './pages/admin/results/results.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageComponent } from './pages/image/image.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AttemptsComponent } from './pages/user/attempts/attempts.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { ShowAllQuizComponent } from './pages/user/show-all-quiz/show-all-quiz.component';
import { ShowQuizComponent } from './pages/user/show-quiz/show-quiz.component';
import { StartComponent } from './pages/user/start/start.component';
import { UpdateUserProfileComponent } from './pages/user/update-user-profile/update-user-profile.component';

import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';
import { AdminGuard } from './services/admin.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    // pathMatch:'full',
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'images',
        component: ImageComponent,
      
      },

      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'categories',
        component: ViewCategoriesComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'delete-category',
        component: DeleteCategoryComponent,
      },
      {
        path: 'edit-category/:cid',
        component: UpdateCategoryComponent,
      },
      {
        path: 'quizzes',
        component: ViewQuizzesComponent,
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
      },
      {
        path: 'quiz/:qid',
        component: UpdateQuizComponent,
      },
      {
        path: 'view-questions/:qid/:title',
        component: ViewQuizQuestionsComponent,
      },
      {
        path: 'add-question/:qid/:title',
        component: AddQuestionComponent,
      },
      {
        path: 'questions/:quesid',
        component: UpdateQuestionComponent,
      },
      {
        path: 'questions/:quesid',
        component: UpdateQuestionComponent,
      },
    ],
    canActivate: [AdminGuard],
    
  },
  {
    path: 'result',
    component: ResultsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    // pathMatch: 'full',
    children:[
      {
        path: '',
        component: WelcomeUserComponent,
      },
      {
        path: 'all-quiz',
        component: ShowAllQuizComponent,
      },
      {
        path: 'show-quiz/:cid/:ctitle',
        component: ShowQuizComponent,
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
      },
      {
        path:'update-user-profile/:uid',
        component:UpdateUserProfileComponent,
      },
      {
        path:'attempts',
        component:AttemptsComponent,
      },
     
     
    ],
    canActivate: [AdminGuard],
  },
  {
    path:'start/:qid',
    component:StartComponent,
    canActivate: [AdminGuard],
  },
  {
    path:'instructions/:qid',
    component:InstructionsComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
