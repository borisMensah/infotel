import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchListComponent } from 'src/composant/launch-list/launch-list.component';
import { LaunchComponent } from "src/composant/launch/LaunchComponent";

const routes: Routes = [
  { path: '', component: LaunchListComponent},
  { path: 'launch/:id', component: LaunchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
