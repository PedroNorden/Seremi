import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Juegos2Page } from './juegos2.page';

describe('Juegos2Page', () => {
  let component: Juegos2Page;
  let fixture: ComponentFixture<Juegos2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Juegos2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
