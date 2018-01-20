import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});

describe('Data Service unit tests', () => {
  let service;

  beforeEach(() => {
    service = new DataService();
  });

  it('#metersToLongitude(111) should return 0.001', () => {
    const expected = 0.001;
    const actual = service.metersToLongitude(111);

    expect(actual).toBe(expected);
  });

  it('#metersToLatitude(1000) should return 0.051731', () => {
    const expected = Math.round(0.051731 * 1000 * 1000);
    const actual = Math.round(service.metersToLatitude(1000) * 1000 * 1000);

    expect(actual).toBe(expected);
  });

});
