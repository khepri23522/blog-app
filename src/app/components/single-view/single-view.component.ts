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
    console.log(this.blogId);

    this.service.getblogId(this.blogId).subscribe((blog) => {
      console.log(blog);
      this.blog = blog;
    });
  }
  






}
