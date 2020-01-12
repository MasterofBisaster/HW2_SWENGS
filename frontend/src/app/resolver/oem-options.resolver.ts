import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {OemService} from '../service/oem.service';

@Injectable({
  providedIn: 'root'
})
export class OemOptionsResolver implements Resolve<Observable<any>> {
  constructor(private oemService: OemService) {
  }

  resolve() {
    return this.oemService.retrieveOemOptions();
  }
}
