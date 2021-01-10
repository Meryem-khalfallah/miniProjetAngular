import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../services/film.service';
import {Film} from '../model/film.model';


@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styles: []
})
export class UpdateFilmComponent implements OnInit {

  currentFilm = new Film();
  constructor(private activatedRoute : ActivatedRoute,
              private router:Router,
              private filmService : FilmService) { }

  ngOnInit(): void {
    this.filmService.consulterFilm(this.activatedRoute.snapshot.params.id).subscribe(fil=>{this.currentFilm=fil;});
  }

  


  updateFilm(){this.filmService.updateFilm(this.currentFilm).subscribe(fil=>{this.router.navigate(['films']);
},(error)=>{alert("Problème lors de la modification!");});}
}
