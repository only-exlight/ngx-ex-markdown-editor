import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IStatus } from '../interfaces/status';

@Injectable()
export class EditorService {
    private status$ = new BehaviorSubject<IStatus>({
        currentColumn: 0,
        currentString: 0,
        stringCount: 0
    });

    get $status(): Observable<IStatus> {
        return this.status$.asObservable();
    }
}
