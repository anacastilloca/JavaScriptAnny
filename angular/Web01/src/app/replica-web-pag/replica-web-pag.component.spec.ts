import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicaWebPagComponent } from './replica-web-pag.component';

describe('ReplicaWebPagComponent', () => {
  let component: ReplicaWebPagComponent;
  let fixture: ComponentFixture<ReplicaWebPagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplicaWebPagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicaWebPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
