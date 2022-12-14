import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'yellow';
  @Input() highlightColor: string = 'darkblue';
  @HostBinding('style.backgroundColor') backgroundColor: string = '';
  @HostBinding('style.color') color: string = 'black';

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.eleRef.nativeElement,
    //   'backgroundColor',
    //   'lightBlue'
    // );
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.eleRef.nativeElement,
    //   'backgroundColor',
    //   'lightBlue'
    // );
    this.backgroundColor = this.highlightColor;
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.eleRef.nativeElement,
    //   'backgroundColor',
    //   'transparent'
    // );
    this.backgroundColor = this.defaultColor;
    this.color = 'black';
  }
}
