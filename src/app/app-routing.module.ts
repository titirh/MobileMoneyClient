import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { OffreClientComponent } from './offre-client/offre-client.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { AcheterOffreComponent } from './acheter-offre/acheter-offre.component'
import { MoneyComponent } from './money/money.component';
import { CreditComponent } from './credit/credit.component';
import { AppelComponent } from './appel/appel.component';
import { HistoriqueComponent } from './historique/historique.component';

const routes: Routes = [
    
    { 
        path: 'login' ,
        component: LoginComponent, 
    },

    { 
        path: 'listeOffres' ,
        component: OffreClientComponent, 
        canActivate: [AuthGuard]
    },

    { 
        path: 'acheterOffre/:idToBuy' ,
        component: AcheterOffreComponent,  
        canActivate: [AuthGuard]
    },

    {
        path: 'Historique',
        component: HistoriqueComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'monCompte',
        component: MonCompteComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'depot',
        component: MoneyComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'credit',
        component: CreditComponent,
        canActivate: [AuthGuard]
    },
    
    {
        path: 'appel',
        component: AppelComponent,
        canActivate: [AuthGuard]
    },

    { 
        path: '',
        redirectTo: '/monCompte', 
        pathMatch: 'full'
    },
    
    { 
        path: '**',
        component: OffreClientComponent, 
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRoutingModule { }
