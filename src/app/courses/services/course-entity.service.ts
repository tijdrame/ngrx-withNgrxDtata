import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Course } from "../model/course";

@Injectable()
export class CourseentityService extends EntityCollectionServiceBase<Course> {

    constructor(serviceElementsfactory: EntityCollectionServiceElementsFactory){
        super('Course', serviceElementsfactory);
    }
}