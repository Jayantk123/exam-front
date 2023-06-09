import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
  import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AuthInterceptor, authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { DeleteCategoryComponent } from './pages/admin/delete-category/delete-category.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { UpdateProfileComponent } from './pages/admin/update-profile/update-profile.component';
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';
import { ShowQuizComponent } from './pages/user/show-quiz/show-quiz.component';
import { ShowAllQuizComponent } from './pages/user/show-all-quiz/show-all-quiz.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UpdateUserProfileComponent } from './pages/user/update-user-profile/update-user-profile.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ResultsComponent } from './pages/admin/results/results.component';
import { AttemptsComponent } from './pages/user/attempts/attempts.component';
import { MatCarouselModule } from 'ng-mat-carousel';
import { ImageComponent } from './pages/image/image.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ProductComponent } from './pages/user/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    DeleteCategoryComponent,
    UpdateCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuestionsComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    UpdateProfileComponent,
    UserSidebar,
    WelcomeUserComponent,
    ShowQuizComponent,
    ShowAllQuizComponent,
    UserProfileComponent,
    UpdateUserProfileComponent,
    InstructionsComponent,
    StartComponent,
    ResultsComponent,
    AttemptsComponent,
    ImageComponent,
    ProductComponent,
    
   
    
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    CKEditorModule,
    NgxUiLoaderModule,
    MatTableModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
  
    }),
    MatCarouselModule.forRoot(),

IvyCarouselModule,
   
   
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
