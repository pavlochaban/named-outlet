import { NgModule } from "@angular/core";
import { Child2Component } from "./child-2.component";
import { Child2Routing } from "./child-2.routing";

@NgModule({
    imports: [
        Child2Routing
    ],
    declarations: [
        Child2Component
    ]
})
export class MainModule { }