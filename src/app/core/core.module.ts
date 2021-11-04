import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RequestInterceptor } from "./auth/request.interceptor";
import { AlertModule } from "../shared/components/alert/alert.module";
import { ShowIfLoggedModule } from "../shared/directives/show-if-logged/show-if-logged.module";
import { LoadingModule } from "../shared/components/loading/loading.module";
import { MenuModule } from "../shared/components/menu/menu.module";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    AlertModule,
    ShowIfLoggedModule,
    LoadingModule,
    MenuModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
