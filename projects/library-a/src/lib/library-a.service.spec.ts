import { TestBed } from '@angular/core/testing';

import { LibraryAService } from './library-a.service';

describe('LibraryAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryAService = TestBed.get(LibraryAService);
    expect(service).toBeTruthy();
  });
});
