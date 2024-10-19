import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFeedComponent } from './components/main-feed/main-feed.component';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
  { path: '', component: MainFeedComponent },
  { path: '', component: FormDialogComponent },
  { path: ' ', component: BodyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
