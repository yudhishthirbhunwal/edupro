import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactIconComponent } from './shared/contact-icon/contact-icon.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, FooterComponent,ContactComponent, ContactIconComponent],
  imports: [BrowserModule, AppRoutingModule,NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
