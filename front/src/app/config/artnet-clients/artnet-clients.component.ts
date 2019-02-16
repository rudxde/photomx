import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { IArtnetDefinition } from '../../core/interfaces/IArtnetPatch';
import { DialogAbstractComponentResult } from '../../ui/dialog/dialog-abstract.component';
import { ArtnetService, IArtnetClient } from '../../core/services/artnet/artnet.service';

@Component({
    selector: 'app-artnet-clients',
    templateUrl: './artnet-clients.component.html',
    styleUrls: ['./artnet-clients.component.css']
})
export class ArtnetClientsComponent implements OnInit {

    @ViewChild('IpInput')
    ipInput: HTMLInputElement;

    selectedArtnet: IArtnetDefinition;
    selectedIp: string;

    artnetPickerIsOpen: boolean;
    artnetPickerResult$: Subject<DialogAbstractComponentResult<IArtnetDefinition>> | undefined;

    allClients: IArtnetClient[];

    constructor(
        private artnetService: ArtnetService,
        private changeDetector: ChangeDetectorRef,
    ) {
        this.selectedArtnet = {
            artnet: 0,
            subnet: 0,
        };
    }

    ngOnInit() {
        this.updateClientList();
    }

    openArtnetPicker(): void {
        this.artnetPickerResult$ = new Subject<DialogAbstractComponentResult<IArtnetDefinition>>();
        this.artnetPickerIsOpen = true;
        this.artnetPickerResult$.subscribe(result => {
            console.debug('[config] dialog returned with', result);
            this.artnetPickerResult$.unsubscribe();
            this.artnetPickerResult$ = undefined;
            this.artnetPickerIsOpen = false;
            if (result.isOkResult()) {
                console.debug('[config] dialog returned with Ok result', result);
                this.selectedArtnet = result.data!;
                this.changeDetector.detectChanges();
            }
        });
    }

    async addNewClient(): Promise<void> {
        if (!this.selectedIp) {
            return;
        }
        if (!this.selectedArtnet.artnet) {
            return;
        }
        if (!this.selectedArtnet.subnet) {
            return;
        }
        await this.artnetService.addArtnetClient({ip: this.selectedIp, artnetDefinition: this.selectedArtnet});
        await this.updateClientList();
    }

    async removeClient(client: IArtnetClient): Promise<void> {
        await this.artnetService.removeArtnetClient(client);
        await this.updateClientList();
    }

    async updateClientList(): Promise<void> {
        this.allClients = await this.artnetService.getArtnetClientList();
        console.debug('[config] updated client list', this.allClients);
        this.changeDetector.detectChanges();
    }

}
