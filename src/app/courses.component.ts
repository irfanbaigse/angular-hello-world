import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector:'courses', // <courses>
    template: `
        <h2>Courses</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
    // calling http logic endpoint
    // * it will make harder to test
    // * component should not contain any other logice apart from template
    // To over come we create service
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor() {
        let service = new CoursesService();
        this.courses = service.getCourses();
    }
}