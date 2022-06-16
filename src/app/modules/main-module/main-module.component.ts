import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl: './main-module.component.html',
    styleUrls: ['./main-module.component.scss']
})
export class MainModuleComponent {

    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

    public child1(): void {
        this.router.navigate(['child-1'], { relativeTo: this.activatedRoute });
    }

    public child2(): void {
        this.router.navigate(['child-2'], { relativeTo: this.activatedRoute });
    }

}