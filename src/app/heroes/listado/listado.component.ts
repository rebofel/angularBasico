import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: String = ''; // Si está vacio es falso. Si tiene contenido es verdadero

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || ''; //Si hace el shift, mandará el heroe borrado. Sino, mandará un string vacio. 
  }

    
}

