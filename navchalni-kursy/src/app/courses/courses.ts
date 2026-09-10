import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, RouterLink],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {

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

}
