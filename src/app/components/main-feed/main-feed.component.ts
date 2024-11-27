import { Component, OnInit } from '@angular/core';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MainService } from 'src/app/services/main.service';
import { Route, Router } from '@angular/router';
import { SingleViewComponent } from '../single-view/single-view.component';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss'],
})
export class MainFeedComponent implements OnInit {
  savedData: any[] = [];

  isLoading = false;
  isUserLogged = this.authService.isAuthenticated();

  constructor(
    public dialog: MatDialog,
    public service: MainService,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadSavedData();
  }

  loadSavedData(): void {
    this.service.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.savedData = data.data;
        this.ShowMessage('noticias cargadas correctamente ✅');
      },
      error: (error) => {
        console.error('Error al cargar los datos:', error);
        this.ShowMessage('Error al cargar las noticias ❌');
      },
    });
  }

  ShowMessage(message: string) {
    this.snackBar.open(message)._dismissAfter(3000);
  }

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
        reportType: data.type,
        isPrimary: data.checked,
        publisherName: data.name,
        publisherJob: data.publisher_job,
      };
      console.log(formData);

      this.service.createBlog(formData).subscribe({
        next: () => {
          this.loadSavedData();
        },
        error: (error) => {
          console.error('Error al crear el blog:', error);
        },
      });
    });
  }

  goblog(id: number) {
    console.log(id);
    this.router.navigate(['/blog', id]);
  }

  logout() {
    this.authService.deleteToken();
    location.reload();
  }

  login() {
    this.router.navigate(['/login']);
  }

  editBlog(blogId: number): void {
    const selectedBlog = this.savedData.find((blog) => blog.id === blogId);

    if (!selectedBlog) {
      console.error(`Blog con ID ${blogId} no encontrado.`);
      this.ShowMessage('No se pudo encontrar el blog seleccionado ❌');
      return;
    }

    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '800px',
      maxHeight: '8000px',
      disableClose: true,
      data: { ...selectedBlog },
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        const updatedBlog = {
          id: selectedBlog.id,
          title: data.title ?? selectedBlog.title,
          subtitle: data.subtitle ?? selectedBlog.subtitle,
          body: data.body ?? selectedBlog.body,
          reportType: data.type ?? selectedBlog.reportType,
          isPrimary: data.checked ?? selectedBlog.isPrimary,
          publisherName: data.name ?? selectedBlog.publisherName,
          publisherJob: data.publisher_job ?? selectedBlog.publisherJob,
        };

        this.service.updateBlog(blogId, updatedBlog).subscribe({
          next: () => {
            this.loadSavedData();
            this.ShowMessage('Blog actualizado correctamente ✅');
          },
          error: (error) => {
            console.error('Error al actualizar el blog:', error);
            this.ShowMessage('Error al actualizar el blog ❌');
          },
        });
      }
    });
  }
}
