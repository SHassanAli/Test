import { TestBed } from '@angular/core/testing';

import { PhoneNotebookService } from './phone-notebook.service';

describe('PhoneNotebookService', () => {
  let service: PhoneNotebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneNotebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
