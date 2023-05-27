import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostBinding, Inject, Input, Renderer2 } from '@angular/core';

type SliceType = null
  | 'entity'
  | 'feature'
  | 'widget'
  | 'page'
  | 'shared';

@Directive({
  selector: '[slice]',
})
export class SliceDirective {
  @Input()
  sliceType: SliceType = null

  @Input()
  position = 'right';

  @HostBinding("class")
  elementClass = "red-border";
  
  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
    @Inject(DOCUMENT)
    private readonly document: Document
  ) {

  }

  ngAfterViewInit(): void {
    const child = this.document.createElement('div');
    child.className = 'slice-tag';
    
    // TODO hostbinding class
    if (this.position === 'left') {
      child.className = child.className + ' left';
    }

    child.textContent = this.sliceType;
    this.renderer.appendChild(this.elementRef.nativeElement, child);
  }
}
