import { NgModule } from "@angular/core";
import { OuterComponent } from "./outer-2.component";
import { OuterRouting } from "./outer-routing";

@NgModule({
    imports: [
        OuterRouting
    ],
    declarations: [
        OuterComponent
    ]
})
export class OuterModule2 { }