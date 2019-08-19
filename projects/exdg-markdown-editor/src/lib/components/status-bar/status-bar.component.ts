import { Component } from '@angular/core';
import { EditorService } from '../../services/editor.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IStatus } from '../../interfaces/status';

@Component({
    selector: 'exdg-status-bar',
    templateUrl: 'status-bar.component.html'
})
export class StatusBarComponent {
    public status: IStatus;
    private subscriber = new Subject();

    constructor(private editorSrv: EditorService) {
        this.editorSrv.$status.pipe(takeUntil(this.subscriber))
            .subscribe(status => this.status = status);
    }
}
