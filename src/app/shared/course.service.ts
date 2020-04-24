import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "../model/course";
import { map, shareReplay } from "rxjs/operators";

/**
 * State less obsrable service, design patter.
 */
@Injectable({
    providedIn: 'root'
})
export class CourseService {
    constructor(private http: HttpClient) {

    }

    getCourse(): Observable<Course[]> {
        return this.http.get<Course[]>('/api/courses')
            .pipe(
                map(res => res['payload']),
                shareReplay()
            );
    }

    getOtherData(): Observable<any> {
        return this.http.get<any>('https://sumit-jaiswal.free.beeceptor.com/users')
            .pipe(
                shareReplay()
            );
    }

    updateCorse(courseId: string, changes: Partial<Course>): Observable<any> {
        return this.http.put<any>(`/api/courses/${courseId}`, changes);
    }
}