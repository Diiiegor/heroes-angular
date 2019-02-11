import {Component, OnInit} from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.service';
import {activateRoutes} from '@angular/router/src/operators/activate_routes';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buscarheroe',
  templateUrl: './buscarheroe.component.html',
  styles: []
})
export class BuscarheroeComponent implements OnInit {

  heroes: Heroe[];

  constructor(private _heroesService: HeroesService, private _activateRoutes: ActivatedRoute) {
  }

  ngOnInit() {
    this._activateRoutes.params.subscribe(params => {
      const term = params.termino;
      const heroesFiltrados = this._heroesService.buscarHeroes(term);
      this.heroes = heroesFiltrados;
    });
  }

}
