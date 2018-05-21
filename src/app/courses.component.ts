import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector:'courses', // <courses>
    // template: `
    //     <h2>Courses</h2>
    //     <ul>
    //         <li *ngFor="let course of courses">
    //             {{ course }}
    //         </li>
    //     </ul>
    // `
    // template: `
    //     <h2>{{ title }}</h2>
    //     <h2 [textContent]="title"></h2>
    //     <img [src]="imageUrl" />
    // `

    // template: `
    //     <button class="btn btn-primary" (click)="onSave($event)">Submit</button>
    // `

    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
    // calling http logic endpoint
    // * it will make harder to test
    // * component should not contain any other logice apart from template
    // To over come we create service
})
export class CoursesComponent {
    email = 'abc@g.com';
    title = "List of courses";
    courses;
    imageUrl = "http://lorempixel.com/400/200"

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    onSave($event) {
        console.log('button clicked');
    }

    onKeyUp() {
        console.log(this.email);
    }
}