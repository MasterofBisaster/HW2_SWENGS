import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CpuListComponent} from './cpu-list/cpu-list.component';
import {AuthGuard} from './auth.guard';
import {CPUFormComponent} from './cpu-form/cpu-form.component';
import {OemOptionsResolver} from './resolver/oem-options.resolver';
import {MemoryTypeOptionsResolver} from './resolver/memoryType-options.resolver';
import {CpuResolver} from './resolver/cpu.resolver';
import {OemListComponent} from './oem-list/oem-list.component';
import {OemFormComponent} from './oem-form/oem-form.component';
import {OemResolver} from './resolver/oem.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'cpu-list', pathMatch: 'full'},
  { path: 'cpu-list',
    component: CpuListComponent,
    canActivate: [AuthGuard],
  },
 { path: 'cpu-form',
    component: CPUFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      oemOptions: OemOptionsResolver,
      memoryTypeOptions: MemoryTypeOptionsResolver
    }
  },
  { path: 'cpu-form/:id',
    component: CPUFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      oemOptions: OemOptionsResolver,
      memoryTypeOptions: MemoryTypeOptionsResolver,
      cpu: CpuResolver,
    }
  },

  { path: 'oem-list',
    component: OemListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'oem-form',
    component: OemFormComponent,
    canActivate: [AuthGuard],
  },
  { path: 'oem-form/:id',
    component: OemFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      oem: OemResolver,
    }
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
