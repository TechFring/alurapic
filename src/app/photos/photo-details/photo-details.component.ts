import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { UserService } from "src/app/core/user/user.service";
import { AlertService } from "src/app/shared/components/alert/alert.service";
import { Photo } from "../photo/photo";
import { PhotoService } from "../photo/photo.service";

@Component({
  templateUrl: "./photo-details.component.html",
  styleUrls: ["./photo-details.component.css"],
})
export class PhotoDetailsComponent implements OnInit {
  photoId: number;
  photo$: Observable<Photo>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.photoId = +this.route.snapshot.paramMap.get("photoId");
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(
      () => {},
      (err) => {
        console.error(err), this.router.navigate(["not-found"]);
      }
    );
  }

  remove(): void {
    this.photoService.removePhoto(this.photoId).subscribe(
      () => {
        this.router.navigate(["/user", this.userService.getUserName()], {
          replaceUrl: true,
        });
        this.alertService.success("Photo removed", true);
      },
      (err: HttpErrorResponse) => {
        console.error(err);
        this.alertService.warning("Could not delete the photo");
      }
    );
  }

  like(photo: Photo): void {
    this.photoService.like(photo.id).subscribe((liked) => {
      if (liked) {
        this.photo$ = this.photoService.findById(this.photoId);
      }
    });
  }
}
