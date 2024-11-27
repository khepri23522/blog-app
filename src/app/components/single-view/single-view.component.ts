import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.scss'],
})
export class SingleViewComponent implements OnInit {
  blog!: any;
  blogId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: MainService
  ) {}

  ngOnInit(): void {
    this.blogId = Number(this.activatedRoute.snapshot.params['id']);
    this.service.getblogId(this.blogId).subscribe({
      next: (data) => {
        if (data.data && data.data.length > 0) {
          this.blog = data.data[0];
        } else {
          console.error('El blog no se encontró o está vacío.');
        }
      },
      error: (error) => {
        console.error('Error al obtener el blog:', error);
      },
    });
  }
}
