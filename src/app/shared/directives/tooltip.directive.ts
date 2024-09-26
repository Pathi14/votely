import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') tooltipMessage: string = ''; 
  private tooltipElement!: HTMLElement | null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
    this.showTooltip(event);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip(event: MouseEvent) {

    this.tooltipElement = this.renderer.createElement('span');
    this.renderer.appendChild(this.tooltipElement, this.renderer.createText(this.tooltipMessage));
    this.renderer.addClass(this.tooltipElement, 'tooltip');
    this.renderer.appendChild(document.body, this.tooltipElement);

    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'backgroundColor', '#333');
    this.renderer.setStyle(this.tooltipElement, 'color', '#fff');
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px 10px');
    this.renderer.setStyle(this.tooltipElement, 'borderRadius', '4px');
    this.renderer.setStyle(this.tooltipElement, 'fontSize', '12px');
    this.renderer.setStyle(this.tooltipElement, 'zIndex', '1000');

    this.positionTooltip(event);
  }

  private positionTooltip(event: MouseEvent) {
    if (this.tooltipElement) {
      const offset = 10;
      this.renderer.setStyle(this.tooltipElement, 'top', `${event.clientY + offset}px`);
      this.renderer.setStyle(this.tooltipElement, 'left', `${event.clientX + offset}px`);
    }
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
