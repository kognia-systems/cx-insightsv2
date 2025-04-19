import { Component, Input } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { filter, map, mergeMap } from 'rxjs';
import { AuthService } from '@auth/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { UserModel } from 'src/app/modules/users/infrastructure/models/user-model';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterModule, SideBarComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  @Input() title: string = 'Administración de usuarios';
  @Input() username: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        this.title = data['title'] || 'Dashboard';
      });
  }

  ngOnInit() {
    const fullName = this.localStorageService.getFullName();

    if (fullName) {
      this.username = fullName || 'Usuario';
    }
  }

  logout() {
    this.authService.logout();
    this.localStorageService.clearAll();
    this.router.navigate(['/auth/login']);
  }
}
