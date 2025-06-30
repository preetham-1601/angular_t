import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingPersonList } from './cooking-person-list';

describe('CookingPersonList', () => {
  let component: CookingPersonList;
  let fixture: ComponentFixture<CookingPersonList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookingPersonList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingPersonList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
