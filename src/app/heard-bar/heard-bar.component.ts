import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-heard-bar',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './heard-bar.component.html',
  styleUrl: './heard-bar.component.css'
})
export class HeardBarComponent {

}
