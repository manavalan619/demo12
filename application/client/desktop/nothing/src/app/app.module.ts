import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HomeModule } from './home/home.module';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TranslatorModule } from './translator/translator.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { TemplateModule } from './template/template.module';
import { SharedService } from '../shared/shared.service';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
  AuthorizationComponent,
      AppComponent
],
  imports: [
  FormsModule,
HttpClientModule,
UserModule,
HomeModule,
SignupModule,
LoginModule,
TemplateModule,
FooterModule,
HeaderModule,
TranslatorModule,
AppRoutingModule,
BrowserAnimationsModule,
      BrowserModule,
AdminModule
],
  providers: [
    	SharedService
],
  bootstrap: [AppComponent]
})
export class AppModule { }