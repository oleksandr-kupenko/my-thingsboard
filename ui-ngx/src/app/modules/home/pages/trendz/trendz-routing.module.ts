///
/// Copyright © 2016-2022 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ConfirmOnExitGuard } from '@core/guards/confirm-on-exit.guard';
import { Authority } from '@shared/models/authority.enum';
import {TrendzComponent} from '@home/components/trendz/trendz.component';
import {OpenTrendzGuard} from '@core/guards/open-trendz.guard';

const routes: Routes = [
  {
    path: 'trendz',
    component: TrendzComponent,
    canActivate: [OpenTrendzGuard],
    canDeactivate: [ConfirmOnExitGuard],
    data: {
      auth: [Authority.SYS_ADMIN, Authority.TENANT_ADMIN, Authority.CUSTOMER_USER],
      title: 'trendz.trendz',
      breadcrumb: {
        label: 'trendz.trendz',
        icon: 'mdi:trendz'
      }
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TrendzRoutingModule { }
