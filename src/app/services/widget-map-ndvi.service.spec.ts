import { TestBed } from '@angular/core/testing';

import { WidgetMapNdviService } from './widget-map-ndvi.service';

describe('WidgetMapNdviService', () => {
  let service: WidgetMapNdviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetMapNdviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
