import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective implements OnChanges {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;
  constructor() {}
  ngOnChanges(): void {
    console.log(this.appState);
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }
}
// si appState vaut CANCELED => state-canceled
// si appState vaut OPTION => state-option
// si appState vaut CONFIRMED => state-confirmed
// Binder la propriété 'class' du <td> dans le component parent avec le string qu'on vient de générer
