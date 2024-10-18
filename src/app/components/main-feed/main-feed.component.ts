import { Component } from '@angular/core';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss'],
})
export class MainFeedComponent {
  constructor(public dialog: MatDialog, public service: MainService) {}

  openForm() {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '800px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((data) => {
      const formData = {
        title: data.title,
        subtitle: data.droptitle,
        body: data.body,
        report_type: data.type,
        is_primary: data.cheked,
        publisher_name: data.name,
        publisher_job: data.type,
      };

      this.service
        .createBlog(formData)
        .subscribe({ next: () => {}, error: (error) => {} });
    });
  }
}
