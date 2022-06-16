import { NgModule } from "@angular/core";
import { MainModuleRouting } from "./main-module-routing";
import { MainModuleComponent } from "./main-module.component";

@NgModule({
    imports: [
        MainModuleRouting
    ],
    declarations: [
        MainModuleComponent
    ]
})
export class MainModule { }