import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title = 'List Orders';
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {}
  public changeTitle(): void {
    this.title = 'New List Orders';
  }
}
