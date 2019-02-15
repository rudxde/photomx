import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-controls-fader',
    templateUrl: './fader.component.html',
    styleUrls: ['./fader.component.css']
})
export class FaderComponent implements OnInit {


    @Output()
    outvalue: EventEmitter<number>;

    @ViewChild('fader')
    fader: ElementRef;

    mousedown: boolean;
    mouseClinetY: number;
    value = 0;
    constructor() {
        this.outvalue = new EventEmitter<number>();
    }

    ngOnInit() {
        this.fader.nativeElement.onmousedown = (event => {
            this.mousedown = true;
            this.mouseClinetY = event.clientY;
            // console.log('md');
            // event.preventdefault();
        });
        this.fader.nativeElement.onmouseup = (event => {
            this.mousedown = false;
            // console.log('mu');
        });
        this.fader.nativeElement.onmousemove = (event => {
            if (this.mousedown === true) {
                const displacement = this.mouseClinetY - event.clientY;
                // console.log('mm', displacement);
                if (this.value + displacement <= 100 && this.value + displacement >= 0) {
                    this.value += displacement;
                    this.outvalue.emit(this.value);
                }
                this.mouseClinetY = event.clientY;
                // event.preventdefault();
            }
        });
    }

}
