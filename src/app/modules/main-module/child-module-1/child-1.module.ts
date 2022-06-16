import { NgModule } from "@angular/core";
import { Child1Component } from "./child-1.component";
import { Child1Routing } from "./child-1.routing";

@NgModule({
    imports: [
        Child1Routing
    ],
    declarations: [
        Child1Component
    ]
})
export class MainModule { }