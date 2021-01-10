import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films : Film[];
  constructor(private filmService : FilmService,private router:Router) {

    //this.films = filmService.listeFilm();
  }

  ngOnInit(): void {
    this.filmService.listeFilm().subscribe(fil=>{console.log(fil);this.films=fil;});
  }

  supprimerFilm(f:Film){
    let conf=confirm("Etes-voussûr?");
    if(conf)this.filmService.supprimerFilm(f.idFilm).subscribe(()=>{console.log("FIlm supprimé");
    this.SuprimerFilmDuTableau(f);
  });
  //this.router.navigate(['films']).then(()=>{window.location.reload();});
}



SuprimerFilmDuTableau(fil:Film){this.films.forEach((cur,index)=>{
  if(fil.idFilm===cur.idFilm){this.films.splice(index,1);}});
}
}
