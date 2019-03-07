import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDescriptionComponent } from './courses-description/courses-description.component';
import { ForumComponent } from './forum/forum.component';
import { CoursePreviewComponent } from './course-preview/course-preview.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'course-preview', component: CoursePreviewComponent },
  { path: 'courses-description', component: CoursesDescriptionComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
