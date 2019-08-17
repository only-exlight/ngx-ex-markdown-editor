import { Component } from '@angular/core';
import { HEADER_OPTIONS } from '../../consts/header-options';
import { EMPHASIS_OPTIONS } from '../../consts/emphasis-options';
import { LIST_OPTIONS } from '../../consts/list-options';
import { TYPOGRAPHIC_OPTIONS } from '../../consts/typographic-options';
import { CODE_OPTIONS, IMAGE_OPTION, LINK_OPTION, SEPARATOR_OPTION } from '../../consts/other-options';

@Component({
    selector: 'exdg-toolbar',
    templateUrl: 'toolbar.component.html'
})
export class ToolbarComponent {
    public readonly HEADER_OPTIONS = HEADER_OPTIONS;
    public readonly EMPHASIS_OPTIONS = EMPHASIS_OPTIONS;
    public readonly LIST_OPTIONS = LIST_OPTIONS;
    public readonly TYPOGRAPHIC_OPTIONS = TYPOGRAPHIC_OPTIONS;
    public readonly CODE_OPTIONS = CODE_OPTIONS;
    public readonly OTHER_OPTIONS = [IMAGE_OPTION, LINK_OPTION, SEPARATOR_OPTION];
}
