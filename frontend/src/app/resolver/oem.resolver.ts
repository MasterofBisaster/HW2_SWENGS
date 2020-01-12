import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {OemService} from '../service/oem.service';

@Injectable({
  providedIn: 'root'
})
export class OemResolver implements Resolve<Observable<any>> {
  constructor(private oemService: OemService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.oemService.getOem(route.paramMap.get('id'));
  }
}
