import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent },
    {
        path: 'produtos',
        // carregando modulo de produtos com lazy loading
        loadChildren: () => import('./demos/arquitetura-componentes/produto.module').then(m => m.ProdutoModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }