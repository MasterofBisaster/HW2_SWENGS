import { Component, OnInit } from '@angular/core';
import {OemService} from '../service/oem.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-oem-list',
  templateUrl: './oem-list.component.html',
  styleUrls: ['./oem-list.component.scss']
})
export class OemListComponent implements OnInit {

  oems: any[];
  displayedColumns = ['name', 'dateOfFounding', 'ceo', 'id']

  constructor(private oemService: OemService, private userService: UserService) { }

  ngOnInit() {
    this.oemService.getOems().subscribe( (response: any[]) => {
      this.oems = response;
    });
  }

  deleteOem(oem: any) {

        this.oemService.deleteOem(oem).subscribe( () => {
          this.ngOnInit();
        });

  }

}
