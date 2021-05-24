import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class CordovaService {
  private resume: BehaviorSubject<boolean>;
  constructor(private zone: NgZone) {
    this.resume = new BehaviorSubject<boolean>(null);
    Observable.bind(document, 'resume').subscribe(event => {
      this.zone.run(() => {
        this.onResume();
      });
    });
  }

  get cordova(): any {
    return _window().cordova;
  }
  get onCordova(): boolean {
    return !!_window().cordova;
  }
  public onResume(): void {
    this.resume.next(true);
  }
}
