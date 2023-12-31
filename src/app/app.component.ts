import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-recipe-book';
  displayedFeature: string = 'recipes';

  onNavigate(event: string) {
    this.displayedFeature = event;
  }
}
