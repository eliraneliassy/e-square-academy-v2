import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ALLOWED_PERMISSIONS } from './allowed-permissions';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {
  @Input() set appPermission(permission: string) {
    this.updateView(permission);
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  // ngOnInit(): void {
  //   if (ALLOWED_PERMISSIONS.includes(this.appPermission)) {
  //     this.viewContainerRef.createEmbeddedView(this.templateRef);
  //   }
  // }

  updateView(permission: string) {
    if (ALLOWED_PERMISSIONS.includes(permission)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
