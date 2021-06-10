import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public title = 'List Clients';
  public collection$!: Observable<Client[]>;
  public headers = ['Name', 'TotalHT', 'Tva', 'TotalTTC', 'State'];
  public states = Object.values(StateClient);
  constructor(private clientsService: ClientsService) {
    this.collection$ = this.clientsService.collection;
  }

  ngOnInit(): void {}

  public changeState(item: Client, e: any): void {
    const state = e.target.value;
    this.clientsService.changeState(item, state).subscribe((res) => {
      // traiter codes erreur return by api
      Object.assign(item, res);
    });
  }
}
