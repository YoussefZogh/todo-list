import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { HeardBarComponent } from "./heard-bar/heard-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeardBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list3';
}