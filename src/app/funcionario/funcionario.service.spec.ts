import { TestBed, inject } from '@angular/core/testing';

import { FuncionarioService } from './funcionario.service';

describe('FuncionarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FuncionarioService]
    });
  });

  it('should ...', inject([FuncionarioService], (service: FuncionarioService) => {
    expect(service).toBeTruthy();
  }));
});
