import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // private collection
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      tap((flux) => {
        console.log(flux);
      }),
      map((flux) => {
        return flux.map((obj) => {
          return new Order(obj);
        });
      })
    );
  }

  // getter collection
  get collection(): Observable<Order[]> {
    return this.collection$;
  }

  // setter collection
  set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  // change item state
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const itemWithNewState = new Order({ ...item });
    itemWithNewState.state = state;
    return this.update(itemWithNewState);
  }

  // update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.patch<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  // add item in collection
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  // delete item in collecion

  // get item by id in collection
}
