import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieCreateComponent } from './recepie-create.component';

describe('RecepieCreateComponent', () => {
  let component: RecepieCreateComponent;
  let fixture: ComponentFixture<RecepieCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepieCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
