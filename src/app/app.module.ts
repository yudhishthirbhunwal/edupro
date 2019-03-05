import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactIconComponent } from './shared/contact-icon/contact-icon.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDescriptionComponent } from './courses-description/courses-description.component';
import { ForumComponent } from './forum/forum.component';
import { CoursePreviewComponent } from './course-preview/course-preview.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent,
                  HomeComponent,
                  NavbarComponent,
                  FooterComponent,
                  ContactIconComponent,
                  LoginComponent,
                  UserDashboardComponent,
                  CoursesComponent,
                  CoursesDescriptionComponent,
                  ForumComponent,
                  CoursePreviewComponent,
                  ContactComponent,
                  AboutComponent],
  imports: [BrowserModule,
            AppRoutingModule,
            NgbModule.forRoot(),
            RouterModule.forRoot([
              { path: '', component: HomeComponent },
              { path: 'courses', component: CoursesComponent },
              { path: 'user-dashboard', component: UserDashboardComponent },
              { path: 'contact', component: ContactComponent },
              { path: 'course-preview', component: CoursePreviewComponent },
              { path: 'courses-description', component: CoursesDescriptionComponent },
              { path: 'forum', component: ForumComponent },
              { path: 'login', component: LoginComponent },
              { path: 'about', component: AboutComponent },


            ])
          ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
