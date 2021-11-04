import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { ShowIfLoggedModule } from "src/app/shared/directives/show-if-logged/show-if-logged.module";
import { PhotoModule } from "../photo/photo.module";
import { PhotoOwnerOnlyDirective } from "./directives/photo-owner-only.directive";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { PhotoDetailsComponent } from "./photo-details.component";

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    PhotoModule,
    VMessageModule,
    ShowIfLoggedModule,
  ],
  exports: [PhotoDetailsComponent, PhotoCommentsComponent],
})
export class PhotoDetailsModule {}
