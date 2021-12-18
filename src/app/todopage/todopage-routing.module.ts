import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodopagePage } from './todopage.page';

const routes: Routes = [
  {
    path: '',
    component: TodopagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodopagePageRoutingModule {}
