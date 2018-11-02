import { TestBed, inject } from '@angular/core/testing';

import { AcademiaService } from './academia.service';

describe('AcademiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcademiaService]
    });
  });

  it('should ...', inject([AcademiaService], (service: AcademiaService) => {
    expect(service).toBeTruthy();
  }));
});