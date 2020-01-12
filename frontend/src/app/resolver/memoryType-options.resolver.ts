import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {MemoryTypeService} from '../service/memory-type.service';

@Injectable({
  providedIn: 'root'
})
export class MemoryTypeOptionsResolver implements Resolve<Observable<any>> {
  constructor(private memoryTypeService: MemoryTypeService) {
  }

  resolve() {
    return this.memoryTypeService.retrieveMemoryTypeOptions();
  }
}
