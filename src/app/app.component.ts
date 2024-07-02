import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/** root component - parent to all the other components used to build the page */
@Component({// this decorator/annotation specifies metadata for the component class
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'notes_app';

}
