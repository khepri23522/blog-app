import { Component, OnInit } from '@angular/core';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss'],
})
export class MainFeedComponent implements OnInit {
  savedData: any[] = []; // Para almacenar todos los datos guardados

  constructor(public dialog: MatDialog, public service: MainService) {}

  ngOnInit(): void {
    this.loadSavedData(); // Cargar los datos guardados al iniciar el componente
  }

  loadSavedData(): void {
    this.service.getAll().subscribe({
      next: (data) => {
        this.savedData = data; // Cargar los datos desde la base de datos
      },
      error: (error) => {
        console.error('Error al cargar los datos:', error);
      },
    });
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
        report_type: data.type,
        is_primary: data.checked,
        publisher_name: data.name,
        publisher_job: data.publisher_job,
      };

      this.service.createBlog(formData).subscribe({
        next: () => {
          this.loadSavedData(); // Recargar los datos después de guardar
        },
        error: (error) => {
          console.error('Error al crear el blog:', error);
        },
      });
    });
  }
}
