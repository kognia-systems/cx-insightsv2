import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CxLogoComponent } from '@components/cx-logo/cx-logo.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

}
