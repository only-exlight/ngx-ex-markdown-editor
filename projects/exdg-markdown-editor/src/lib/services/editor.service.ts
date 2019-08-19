import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IStatus } from '../interfaces/status';
import { IOption } from '../interfaces/option';

@Injectable()
export class EditorService {
    private status$ = new BehaviorSubject<IStatus>({
        currentColumn: 0,
        currentString: 0,
        stringCount: 0
    });
    private toolbarEvents$ = new Subject<IOption>();

    get $status(): Observable<IStatus> {
        return this.status$.asObservable();
    }

    get $toolbarEvents(): Observable<IOption> {
        return this.toolbarEvents$.asObservable();
    }

    public sendToolbarEvent(e: IOption): void {
        this.toolbarEvents$.next(e);
    }
}
