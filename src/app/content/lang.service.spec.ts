import { TestBed, inject } from '@angular/core/testing';

import { LangService } from './lang.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

describe('LangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient, LangService]
    });
  });

  it('should be created', inject([LangService], (service: LangService) => {
    expect(service).toBeTruthy();
  }));
});
