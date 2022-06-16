import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './child-2.component.html'
})
export class Child2Component {
    
    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

    // named outlet from children
    public outer1(): void {
        const urlTree = this.router.createUrlTree(
            [{ outlets: { 'outer-1': 'outer-1' } }],
            { relativeTo: this.activatedRoute.parent }
        );
        this.router.navigateByUrl(urlTree);
    }

    // navigated to module which is lazy loaded in parent...parent modules ( named outlet )
    // will be loaded in app.component.html <router-outlet name""></router-outlet>
    public outer2named(): void {
        const url = this.router.createUrlTree([{ outlets: { 'outer-2': [ 'outer-2-named' ] }, relativeTo: this.activatedRoute.root }]);
        this.router.navigateByUrl(url)
    }
}