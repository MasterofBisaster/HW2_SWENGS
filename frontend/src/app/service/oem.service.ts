import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OemService {

  constructor(private http: HttpClient) { }

  retrieveOemOptions() {
    return this.http.get <any[]>('/api/oem/options');
  }

  getOems() {
    return this.http.get('/api/oem/list');
  }

  getOem(id) {
    return this.http.get('/api/oem/' + id + '/get');
  }

  createOem(oem) {
    return this.http.post('api/oem/create', oem);
  }

  deleteOem(oem) {
    return this.http.delete('/api/oem/' + oem.id + '/delete');
  }

  updateOem(oem) {
    return this.http.put('api/oem/' + oem.id + '/update', oem);
  }
}
