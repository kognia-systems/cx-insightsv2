import { Component } from '@angular/core';
import { CxLogoComponent } from "../../components/cx-logo/cx-logo.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

}
