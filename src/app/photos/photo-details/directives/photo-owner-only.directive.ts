import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

import { UserService } from "src/app/core/user/user.service";
import { Photo } from "../../photo/photo";

@Directive({
  selector: "[photoOwnerOnly]",
})
export class PhotoOwnerOnlyDirective implements OnInit {
  @Input() set photoOwnerOnly(photo: Photo) {
    const user = this.userService.getUserObject();

    if (user && user.id === photo.userId) {
      this.viewContainer.createEmbeddedView(this.element);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private element: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UserService
  ) {}

  ngOnInit() {}
}
