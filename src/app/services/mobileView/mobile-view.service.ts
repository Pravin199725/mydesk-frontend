import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MobileViewService {
    private isMobile = new Subject();
    public screenWidth: string;


    constructor() {
        this.checkWidth();
    }

    onMobileChange(status: boolean) {
        this.isMobile.next(status);
    }

    getMobileStatus(): Observable<any> {
        return this.isMobile.asObservable();
    }

    public checkWidth() {
        var width = window.innerWidth;
        if (width <= 600) {
            this.screenWidth = 'sm';
            this.onMobileChange(true);
        } else {
            this.screenWidth = 'lg';
            this.onMobileChange(false);
        }
    }

}