import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-libraryA',
  template: `
    <p>
      library-a works!
    </p>
  `,
  styles: []
})
export class LibraryAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
