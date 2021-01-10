import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  apiURL : string = 'http://localhost:8080/films/api';

  films : Film[];
  // film : Film;

  constructor(private http : HttpClient) {
    /*this.films=[
      { idFilm : 1,
        nomFilm : "Rebecca",
        prixFilm : 23.500,
        dateCreation : new Date("01/14/2011")
      },
      { idFilm : 2,
        nomFilm : "Tyler Rake",
        prixFilm : 32.250,
        dateCreation : new Date("12/17/2010")
      },
      { idFilm : 3,
        nomFilm : "Project Power",
        prixFilm : 33.000,
        dateCreation : new Date("02/20/2020")
      }
    ]; */
   }

  

    listeFilm(): Observable<Film[]>{
      return this.http.get<Film[]>(this.apiURL);
    }
    
    ajouterFilm(fil:Film):Observable<Film>{
      return this.http.post<Film>(this.apiURL,fil,httpOptions);
    }

    supprimerFilm(id:number){
      const url =`${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
    }
    
    
    consulterFilm(id:number): Observable<Film>{
      const url=`${this.apiURL}/${id}`;
      return this.http.get<Film>(url);}

  //consulterFilm(id : number): Film{
    //return this.films.find(f => f.idFilm == id);
    // return this.film;
  //}


  trierFilms(){
    this.films=this.films.sort((f1,f2) => {
      if(f1.idFilm>f2.idFilm){
        return 1;
      }
      if(f1.idFilm<f2.idFilm)
      {return -1;}
      return 0;
    }
    );
  }


  updateFilm(fil:Film):Observable<Film>{
    return this.http.put<Film>(this.apiURL,fil,httpOptions);}
  
}
