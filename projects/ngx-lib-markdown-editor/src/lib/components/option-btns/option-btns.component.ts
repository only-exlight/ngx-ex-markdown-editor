import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IOption } from '../../interfaces/option';

@Component({
    selector: 'lib-option-button',
    templateUrl: 'option-btns.component.html'
})
export class OptionButtonsComponent {
    @Input() public options: IOption[] = [];
    @Output() public used = new EventEmitter<IOption>();

    public useOption(o: IOption) {
        this.used.emit(o);
    }
}
