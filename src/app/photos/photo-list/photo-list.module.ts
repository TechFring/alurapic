import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { FilterByDescription } from "./filter-by-description.pipe";
import { PhotoModule } from "../photo/photo.module";
import { CardModule } from "../../shared/components/card/card.module";
import { SearchComponent } from "./search/search.component";
import { DarkenOnHoverModule } from "../../shared/directives/darken-on-hover/darken-on-hover.module";
import { LoadingInterceptor } from "src/app/shared/components/loading/loading.interceptor";

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule,
    RouterModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
})
export class PhotoListModule {}
