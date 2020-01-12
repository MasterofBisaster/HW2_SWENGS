
import { Component, OnInit } from '@angular/core';
import {CPUService} from '../service/cpu.service';
import {UserService} from '../service/user.service';
import {CoremultiplierService} from '../service/coremultiplier.service';

@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.scss']
})
export class CpuListComponent implements OnInit {

  cpus: any[];
  displayedColumns = ['name', 'coremultiplier', 'price', 'id'];

  constructor(private cpuService: CPUService, public coreMultiplierService: CoremultiplierService, private userService: UserService) { }

ngOnInit() {
    this.cpuService.getCPUs().subscribe((response: any[]) => {
      this.cpus = response;
    });
  }

  deleteCPU(cpu: any) {
    this.cpuService.deleteCPU(cpu).subscribe( () => {
      this.ngOnInit(); this.cpuService.deleteCPU(cpu).subscribe( () => {
        this.ngOnInit();
  });
    });
  }
}
