import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ResultboardComponent } from '../app/resultboard/resultboard.component';
import{AdmissionformComponent} from '../app/admissionform/admissionform.component';
  import { from } from 'rxjs';

const routes: Routes = [{path:"result", component:ResultboardComponent},
{path:"admission", component:AdmissionformComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
