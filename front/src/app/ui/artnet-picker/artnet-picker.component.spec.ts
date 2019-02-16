import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtnetPickerComponent } from './artnet-picker.component';

describe('ArtnetPickerComponent', () => {
    let component: ArtnetPickerComponent;
    let fixture: ComponentFixture<ArtnetPickerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArtnetPickerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArtnetPickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
