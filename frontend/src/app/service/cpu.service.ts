import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CPUService {

  constructor(private http: HttpClient) { }

  getCPUs() {
    return this.http.get('/api/cpu/list');
  }

  getCPU(id) {
    return this.http.get('/api/cpu/' + id + '/get');
  }

  createCPU(cpu) {
    return this.http.post('api/cpu/create', cpu);
  }

  deleteCPU(cpu) {
    return this.http.delete('/api/cpu/' + cpu.id + '/delete');
  }

  updateCPU(cpu) {
    return this.http.put('api/cpu/' + cpu.id + '/update', cpu);
  }
}
