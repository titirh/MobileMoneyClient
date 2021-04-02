import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationOffreComponent } from './navigation-offre/navigation-offre.component';
import { OffreClientComponent } from './offre-client/offre-client.component';
import { AcheterOffreComponent } from './acheter-offre/acheter-offre.component'
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './helpers/Jwt.interceptor';
import { ErrorInterceptor } from './helpers/error-interceptor';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { ProfilComponent } from './profil/profil.component';
import { MoneyComponent } from './money/money.component';
import { CreditComponent } from './credit/credit.component';
import { AppelComponent } from './appel/appel.component';
import { HistoriqueComponent } from './historique/historique.component';


@NgModule({
  declarations: [
    AppComponent,
    OffreClientComponent,
    AcheterOffreComponent,
    NavigationComponent,
    NavigationOffreComponent,
    LoginComponent,
    MonCompteComponent,
    ProfilComponent,
    MoneyComponent,
    CreditComponent,
    AppelComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [NavigationComponent]
})
export class AppModule { }
