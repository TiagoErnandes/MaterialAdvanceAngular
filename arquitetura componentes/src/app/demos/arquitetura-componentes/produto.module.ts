import { CommonModule, registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';
import { NgModule } from "@angular/core";
import { ProdutoCardDetalheComponent } from "./componentes/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./componentes/produto-count-component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.route";

registerLocaleData(localePt)

@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ProdutoCardDetalheComponent,
        ProdutoCountComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    exports: [

    ]
})
export class ProdutoModule { }


