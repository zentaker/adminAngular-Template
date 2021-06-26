import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo: string = '';
  public tituloSubs$: Subscription;
  ngOnDestroy() {
    this.tituloSubs$.unsubscribe();
  }

  constructor(private router: Router) {
    this.tituloSubs$ = this.getArgumentosRuta().subscribe( data => {
      console.log(data)
      this.titulo = data.title;
      //titulo en la pestana
      document.title = `AdminPro - ${ data.title}`;

    })


   }
   getArgumentosRuta() {
    return this.router.events.pipe(
      filter( (event:any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild ===null),
      map((event: ActivationEnd) => event.snapshot.data)
    )
   }


}
