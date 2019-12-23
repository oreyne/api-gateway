import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {GatewayComponent} from './gateway.component';
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing'

describe('GatewayComponent', () => {
    let component: GatewayComponent;
    let fixture: ComponentFixture<GatewayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, FormsModule, HttpClientTestingModule, RouterModule],
            declarations: [GatewayComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GatewayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a three components in Gateway page', () => {
        const bannerElement: HTMLElement = fixture.nativeElement;
        expect(bannerElement.textContent).toContain('Unique String Identificator');
        expect(bannerElement.textContent).toContain('Name');
        expect(bannerElement.textContent).toContain('IpAddress');
    });
});
