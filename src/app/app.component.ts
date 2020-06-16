import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diff-load-poc';

  constructor() {
    this.checklist();
  }


  public checklist(): boolean {
    const someList = [
      'hello',
      'world'
    ];

    // tslint:disable-next-line: no-console
    console.info('Ran check list');

    return someList.includes('world');
  }
}
