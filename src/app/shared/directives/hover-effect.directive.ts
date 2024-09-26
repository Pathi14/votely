import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
  private originalColor: string = '';
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.originalColor = this.el.nativeElement.style.backgroundColor;
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#f0f0ff');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.10)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease, background-color 0.3s ease');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.originalColor);
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }
}
