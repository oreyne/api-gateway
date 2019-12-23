import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PeripheralComponent } from './peripheral.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import{HttpClientTestingModule} from '@angular/common/http/testing'
import { RouterTestingModule } from "@angular/router/testing";

describe('PeripheralComponent', () => {
  let component: PeripheralComponent;
  let fixture: ComponentFixture<PeripheralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ imports: [ FormsModule,RouterModule,HttpClientTestingModule,RouterTestingModule],
      declarations: [ PeripheralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeripheralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a three components in Peripheral page', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('UID');
    expect(bannerElement.textContent).toContain('Vendor');
    expect(bannerElement.textContent).toContain('Status');
  });
});
