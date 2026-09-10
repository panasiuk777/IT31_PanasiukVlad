import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail {

  id!: number;

  item: any;

  courses = [
    {
      id: 1,
      title: 'HTML та CSS',
      teacher: 'Олександр',
      duration: 20
    },
    {
      id: 2,
      title: 'JavaScript',
      teacher: 'Марія',
      duration: 30
    },
    {
      id: 3,
      title: 'Angular',
      teacher: 'Іван',
      duration: 25
    }
  ];

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe((params: Params) => {

      this.id = Number(params['id']);

      this.item = this.courses.find(
        course => course.id === this.id
      );

    });

  }

}
