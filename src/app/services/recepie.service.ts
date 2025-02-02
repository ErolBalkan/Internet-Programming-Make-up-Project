import {map, Observable, switchMap} from 'rxjs';
import {Recepie} from '../../models/recepies';
import {HttpClient} from '@angular/common/http';
const BASE_URL = 'http://localhost:3000';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {

  constructor(private http: HttpClient) { }
  getRecepies() {
    const url = `${BASE_URL}/recepies`;
    return this.http.get<Recepie[]>(url);
  }
  createRecepie(recepieData: any): Observable<Recepie> {
    return this.getLastRecepieId().pipe(
      map(lastId => ({
        ...recepieData,
        id: (lastId + 1).toString()
      })),
      switchMap(newRecepieData =>
        this.http.post<Recepie>(`${BASE_URL}/recepies`, newRecepieData)
      )
    );
  }
  
  deleteRecepie(id: number) {
    const url = `${BASE_URL}/recepies/${id}`;
    return this.http.delete<Recepie>(url);
  }
  getLastRecepieId(): Observable<number> {
    return this.http.get<Recepie[]>(`${BASE_URL}/recepies`).pipe(
      map(recepies => {
        if (recepies.length === 0) return 0;
        return Math.max(...recepies.map(recepie => recepie.id));
      })
    );
  }
}