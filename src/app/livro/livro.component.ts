import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthServiceService } from '../service/auth.service';

@Component({
  selector: 'app-livro',
  standalone: false,
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.scss'
})
export class LivroComponent {

  constructor(private authservice: AuthServiceService, private router: Router) {}

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    logout() {
      this.authservice.logout();
    }

}
