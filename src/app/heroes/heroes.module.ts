import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({

    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [ //Solo modulos 
        CommonModule //Este modulo nos permite usar directivas como ngIf y ngFor
    ]

})
export class HeroesModule {}
