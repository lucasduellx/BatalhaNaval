import { TestBed } from '@angular/core/testing';

import { DadosGlobaisService } from './dados-globais.service';

describe('DadosGlobaisService', () => {
  let service: DadosGlobaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosGlobaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
