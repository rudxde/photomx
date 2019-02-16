import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtnetClientsComponent } from './artnet-clients.component';

describe('ArtnetClientsComponent', () => {
    let component: ArtnetClientsComponent;
    let fixture: ComponentFixture<ArtnetClientsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArtnetClientsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArtnetClientsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
