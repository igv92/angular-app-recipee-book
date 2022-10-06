import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

    private elementRef;

    constructor(elementRef: ElementRef) {}

    ngOnInit(): void {
        // Example behavior -> this directive change the element background color to YELLOW
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }

}