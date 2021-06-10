import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  private testObservable$ = new Observable((listXdeSubscribes) => {
    listXdeSubscribes.next([{ name: 'chris' }, { name: 'Juju' }]);
  });
  private sub!: Subscription;
  public title = 'List Orders';
  // public collection!: Order[];
  public collection$!: Observable<Order[]>;
  public headers = [
    'Type',
    'Client',
    'NbJours',
    'TjmHT',
    'TotalHT',
    'TotalTTC',
    'State',
  ];
  constructor(private ordersService: OrdersService) {
    // this.ordersService.collection.subscribe((data) => {
    //   this.collection = data;
    //   console.log(data);
    // });
    this.collection$ = this.ordersService.collection;
  }

  ngOnInit(): void {
    this.sub = this.testObservable$.subscribe((flux) => {
      console.log(flux);
    });
  }

  public changeTitle(): void {
    this.title = 'New List Orders';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
