import { Directive, ElementRef, Output, HostListener, EventEmitter, Input } from '@angular/core';

/**
 * Directive to notify when clicked outside of a selective element
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  /**
   * Flag to emit value
   */
  @Input()
  public triggered = false;

  /**
   * Event emmiter to notify
   */
  @Output()
  public clickOutside = new EventEmitter<MouseEvent>();

  /**
   * Constructor:
   * @param elementRef
   */
  constructor(private elementRef: ElementRef) {
  }

  /**
   * Listen click event and check if the clicked happens inside the required element
   */
  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
      if (!targetElement) {
        return;
      }

      // Trigger flag reduce emitting, it emits when needed
      if (this.triggered) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
          this.clickOutside.emit(event);
        }
      }

  }

}