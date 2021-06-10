import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  // private collection
  private collection$!: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}/clients`).pipe(
      tap((flux) => {
        console.log(flux);
      }),
      map((flux) => {
        return flux.map((obj) => {
          return new Client(obj);
        });
      })
    );
  }

  // getter collection
  get collection(): Observable<Client[]> {
    return this.collection$;
  }

  // setter collection
  set collection(col: Observable<Client[]>) {
    this.collection$ = col;
  }

  // change item state
  public changeState(item: Client, state: StateClient): Observable<Client> {
    const itemWithNewState = new Client({ ...item });
    itemWithNewState.state = state;
    return this.update(itemWithNewState);
  }

  // update item in collection
  public update(item: Client): Observable<Client> {
    return this.http.patch<Client>(`${this.urlApi}/clients/${item.id}`, item);
  }

  // delete item in collecion

  // get item by id in collection
}
