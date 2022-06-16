import { NgModule } from "@angular/core";
import { OuterComponent } from "./outer-1.component";
import { OuterRouting } from "./outer-routing";

@NgModule({
    imports: [
        OuterRouting
    ],
    declarations: [
        OuterComponent
    ]
})
export class OuterModule1 { }