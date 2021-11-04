import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';
import { PhotoFormComponent } from "./photo-form.component";
import { PhotoModule } from "../photo/photo.module";

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule,
    PhotoModule,
    ImmediateClickModule,
  ],
})
export class PhotoFormModule {}
