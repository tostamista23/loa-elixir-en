import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElixirComponent } from './elixir/containers/elixir.component';

const routes: Routes = [{ path: '**', component: ElixirComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
