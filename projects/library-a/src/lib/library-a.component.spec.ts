import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAComponent } from './library-a.component';

describe('LibraryAComponent', () => {
  let component: LibraryAComponent;
  let fixture: ComponentFixture<LibraryAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
