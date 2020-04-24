import {Component, OnInit} from '@angular/core';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, filter, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import { CourseService } from '../shared/course.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;


  constructor(private courseService: CourseService) {

  }

  ngOnInit() {
    this.reloadCourseList();
  }

  reloadCourseList(){
   
    const courses$ = this.courseService.getCourse()
    .pipe(
      map(courses=> courses.sort(sortCoursesBySeqNo))
    );

    // manual subscription for testing.
    // courses$.subscribe((res)=> {
    //   console.log('called courses:- ', res)
    // });

    this.beginnerCourses$ = courses$.pipe(
      map(courses => courses.filter(course=> course.category =='BEGINNER'))
    );

    this.advancedCourses$ = courses$.pipe(
      map(courses => courses.filter(course=> course.category=='ADVANCED'))
    );

    
  }




}




