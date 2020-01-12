import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {OemService} from '../service/oem.service';

@Component({
  selector: 'app-oem-form',
  templateUrl: './oem-form.component.html',
  styleUrls: ['./oem-form.component.scss']
})
export class OemFormComponent implements OnInit {

  oemFormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute,
              private router: Router, private oemService: OemService) { }

  ngOnInit() {
    this.oemFormGroup = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      ceo: [''],
      employeeCount: [0],
      dateOfFounding: [null],
      stockIndexName: ['', this.onlyUpperCaseValidator()]

    });

    const id = this.route.snapshot.paramMap.get('id');

    const data = this.route.snapshot.data;
    if (data.oem) {
      this.oemFormGroup.patchValue(data.oem);
    }

  }

  createOem() {
    const oem = this.oemFormGroup.value;
    if (oem.id) {
      this.oemService.updateOem(oem).subscribe(() => {
        alert('OEM updated succesfully');
      });
    } else {
      this.oemService.createOem(oem).subscribe((response: any) => {
        this.router.navigate(['/oem-form/' + response.id]);
      });
    }
  }

  onlyUpperCaseValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = /([a-z])/.test(control.value);
        return forbidden ? {character: {value: control.value}} : null;
    };
  }

}
