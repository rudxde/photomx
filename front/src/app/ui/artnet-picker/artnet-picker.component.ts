import { Component, OnInit, Input } from '@angular/core';
import { DialogAbstractComponent } from '../dialog/dialog-abstract.component';
import { IArtnetDefinition } from '../../core/interfaces/IArtnetPatch';

@Component({
    selector: 'app-artnet-picker',
    templateUrl: './artnet-picker.component.html',
    styleUrls: ['./artnet-picker.component.css']
})
export class ArtnetPickerComponent extends DialogAbstractComponent<IArtnetDefinition> implements OnInit {

    @Input()
    preselected: IArtnetDefinition;

    selected: IArtnetDefinition;

    pickerTab: 'artnet' | 'subnet';

    piackables: number[];
    constructor() {
        super();
        this.piackables = Array.from({ length: 255 }, (_, k) => k + 1);
        this.pickerTab = 'artnet';
    }

    ngOnInit() {
        if (this.preselected) {
            this.selected = {...this.preselected}; // clone object
        } else {
            this.selected = { artnet: 0, subnet: 0 };
        }
    }

    selectArtnet(selectedArtnet: number) {
        this.selected.artnet = selectedArtnet;
        this.pickerTab = 'subnet';
    }

    selectSubnet(selectedSubnet: number) {
        this.selected.subnet = selectedSubnet;
    }

    submit() {
        super.submit(this.selected);
    }
}
