import { Component } from '@angular/core';
import { CxLogoComponent } from "../../components/cx-logo/cx-logo.component";

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CxLogoComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

}
