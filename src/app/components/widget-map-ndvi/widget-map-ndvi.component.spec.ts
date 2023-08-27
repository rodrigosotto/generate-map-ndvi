import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMapNdviComponent } from './widget-map-ndvi.component';

describe('WidgetMapNdviComponent', () => {
  let component: WidgetMapNdviComponent;
  let fixture: ComponentFixture<WidgetMapNdviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetMapNdviComponent]
    });
    fixture = TestBed.createComponent(WidgetMapNdviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
