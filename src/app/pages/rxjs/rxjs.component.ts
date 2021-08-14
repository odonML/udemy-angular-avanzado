import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnDestroy{
  public intervalSubs: Subscription;
  
  constructor() {
    /* Subcripcion Recomendada por la DOCUMENTACION */
    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe({
    //   next(x) {
    //     console.log('el valor ', x);
    //   },
    //   error(err) {
    //     console.error('error');
    //   },
    //   complete() {
    //     console.info("termino nuestro Obs")
    //   }
    // });
   /* Subcripcion Alterna */
    // obs$.subscribe(
    //   valor => console.log("el valor", valor),
    //   error => console.error("error"),
    //   () => console.info("termino nuestro Obs")
    // );

    this.intervalSubs = this.retornarInterval().subscribe(console.log);
    
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();      
  }
  
  retornarInterval(): Observable<number>{
    return interval(1000).pipe(
      map(valor => valor + 1),
      filter(valor => (valor % 2 === 0 ? true : false)),
      take(10),
    )
  }

  retornaObservable():Observable<number>{
    return new Observable<number>((observer) => {
      let i = -1;
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          i=0;
          observer.error('error del observable');
        }
      }, 1000);
    });

  }
}
