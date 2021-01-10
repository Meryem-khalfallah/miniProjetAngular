import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import {FilmService} from '../services/film.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

newFilm = new Film();

message: string;

  constructor(private filmService : FilmService,private router:Router) { }

  ngOnInit(): void {

  }

  /*addFilm(){
    //console.log(this.newFilm);
    this.filmService.ajouterFilm(this.newFilm);
    this.message = "Film  " + this.newFilm.nomFilm + "   ajouté avec succès !";
  }*/

  addFilm(){this.filmService.ajouterFilm(this.newFilm).subscribe(fil=>{console.log(fil);
  });
  this.router.navigate(['films']).then(()=>{window.location.reload();});
}
}