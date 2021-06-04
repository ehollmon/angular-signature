import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PadComponent} from "./pad/pad.component";

const routes: Routes = [
  {
    path: 'pad',
    component: PadComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
