import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFeedComponent } from './components/main-feed/main-feed.component';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import { BodyComponent } from './components/body/body.component';
import { SingleViewComponent } from './components/single-view/single-view.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: MainFeedComponent },
  {
    path: 'blog/:id',
    component: SingleViewComponent,
  },
  { path: 'login', component: LoginComponent },

  // { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
