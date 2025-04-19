import { ChangeDetectorRef, Component, Input } from '@angular/core';
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
import { NavbarTitleService } from '@shared/navbar-title.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, SideBarComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  @Input() username: string = '';
  title$: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private navbarTitleService: NavbarTitleService
  ) {
  }

  ngAfterViewInit() {
    this.title$ = this.navbarTitleService.title$;
    this.cdr.detectChanges();
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
