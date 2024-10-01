import { TestBed } from '@angular/core/testing';

import { EstadoServicioService } from './estado-servicio.service';

describe('EstadoServicioService', () => {
  let service: EstadoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
