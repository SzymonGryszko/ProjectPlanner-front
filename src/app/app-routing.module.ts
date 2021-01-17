import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { BoardsGridComponent } from './boards-grid/boards-grid.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    
  //Site routes goes here 
  { 
      path: '', 
      component: MainComponent,
      children: [
        { path: 'board/:id', component: BoardComponent, pathMatch: 'full'},
        { path: 'boards/:id', component: BoardsGridComponent, pathMatch: 'full'}
      ]
  },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
