import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements OnInit {
  @Input('appBorderColor') color: string = '#181823';
  constructor(private el: ElementRef, private r: Renderer2) {}
  ngOnInit(): void {
    // this.r.addClass(this.el.nativeElement, 'border-animation');
  }

  @HostListener('mouseenter') onEnter() {
    this.r.addClass(this.el.nativeElement, 'border-animation');
    this.r.setStyle(
      this.el.nativeElement,
      'background',
      `linear-gradient(60deg, #181823, ${this.color})`
    );
  }

  @HostListener('mouseleave') onLeave() {
    this.r.removeClass(this.el.nativeElement, 'border-animation');
    this.r.setStyle(
      this.el.nativeElement,
      'background',
      `linear-gradient(60deg, #181823, #181823)`
    );
  }
}
