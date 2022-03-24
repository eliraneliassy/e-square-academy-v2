import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') background = 'inherit';

  @HostListener('mouseover', ['$event']) onMouseover(event: MouseEvent): void {
    console.log(event);
    this.background = 'yellow';
    this.addElement();
  }

  @HostListener('mouseleave') onMouseleave(): void {
    this.background = 'inherit';
    this.removeElement();
  }

  myElement: HTMLElement | null = null;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  addElement() {
    if (this.myElement) {
      return;
    }

    let div = this.renderer.createElement('div');
    const text = this.renderer.createText('hello');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.elementRef.nativeElement, div);
    this.myElement = div;
  }

  removeElement() {
    this.renderer.removeChild(this.elementRef.nativeElement, this.myElement);
    this.myElement = null;
  }
}
