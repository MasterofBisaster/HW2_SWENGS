import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemoryTypeService {

  constructor(private http: HttpClient) { }

  retrieveMemoryTypeOptions() {
    return this.http.get <any[]>('/api/memorytype/options');
  }
}
