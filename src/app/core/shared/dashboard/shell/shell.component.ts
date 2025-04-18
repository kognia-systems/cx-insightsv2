import { Component } from '@angular/core';
import { CxLogoComponent } from "../../components/cx-logo/cx-logo.component";
import { RouterModule } from '@angular/router';
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterModule, SideBarComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

}
