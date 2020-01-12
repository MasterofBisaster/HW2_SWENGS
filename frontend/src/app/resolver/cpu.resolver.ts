import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {CPUService} from '../service/cpu.service';

@Injectable({
  providedIn: 'root'
})
export class CpuResolver implements Resolve<Observable<any>> {
  constructor(private cpuService: CPUService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.cpuService.getCPU(route.paramMap.get('id'));
  }
}
