import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GatewayDetailComponent} from './gateway-detail.component';
import {RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import {RouterTestingModule} from "@angular/router/testing";

describe('GatewayDetailComponent', () => {
    let component: GatewayDetailComponent;
    let fixture: ComponentFixture<GatewayDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule, RouterTestingModule, HttpClientTestingModule],
            declarations: [GatewayDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GatewayDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have several label in this page', () => {
        const bannerElement: HTMLElement = fixture.nativeElement;
        expect(bannerElement.textContent).toContain('Gateway Detail');
        expect(bannerElement.textContent).toContain('Go Back');
        expect(bannerElement.textContent).toContain('Name');
    });
});
