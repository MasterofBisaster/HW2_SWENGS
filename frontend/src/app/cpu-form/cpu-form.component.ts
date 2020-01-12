import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, ValidatorFn, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CPUService} from '../service/cpu.service';
import {CoremultiplierService} from '../service/coremultiplier.service';

import {MemoryTypeService} from '../service/memory-type.service';

@Component({
  selector: 'app-cpu-form',
  templateUrl: './cpu-form.component.html',
  styleUrls: ['./cpu-form.component.scss']
})
export class CPUFormComponent implements OnInit {

  cpuFormGroup;
  oemOptions;
  memoryTypeOptions;
  display: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              private router: Router, private cpuService: CPUService, public coremultiplierService: CoremultiplierService) { }

  ngOnInit() {
    this.cpuFormGroup = this.fb.group({
      id: [null],
      name: ['', [Validators.required]],
      price: [null],
      coremultiplier: [null],
      release_date: [null, Validators.required],
      status: [],
      manufacturer: [null],
      memorySupport: [[]]
    });

    const id = this.route.snapshot.paramMap.get('id');

    const data = this.route.snapshot.data;
    this.oemOptions = data.oemOptions;
    this.memoryTypeOptions = data.memoryTypeOptions;

    if (data.cpu) {
      this.cpuFormGroup.patchValue(data.cpu);
    }

  }


  showDialog() {
    this.display = true;
  }

  createCPU() {
    const cpu = this.cpuFormGroup.value;
    if (cpu.id) {
      this.cpuService.updateCPU(cpu).subscribe(() => {
        alert('CPU updated succesfully');
      });
    } else {
      this.cpuService.createCPU(cpu).subscribe((response: any) => {
        this.router.navigate(['/cpu-form/' + response.id]);
      });
    }
  }


}
