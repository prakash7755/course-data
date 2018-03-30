import { TestBed, inject } from '@angular/core/testing';

import { BooksDataService } from './books-data.service';

describe('BooksDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksDataService]
    });
  });

  it('should be created', inject([BooksDataService], (service: BooksDataService) => {
    expect(service).toBeTruthy();
  }));
});
