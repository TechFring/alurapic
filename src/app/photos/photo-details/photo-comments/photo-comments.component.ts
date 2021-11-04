import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

import { PhotoComment } from "../../photo/photo-comment";
import { PhotoService } from "../../photo/photo.service";

@Component({
  selector: "ap-photo-comments",
  templateUrl: "./photo-comments.component.html",
  styleUrls: ["./photo-comments.component.css"],
})
export class PhotoCommentsComponent implements OnInit {
  @Input() photoId: number;
  commentForm: FormGroup;

  comments$: Observable<PhotoComment[]>;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ["", [Validators.required, Validators.maxLength(300)]],
    });
  }

  save() {
    const comment = this.commentForm.get("comment").value;

    this.comments$ = this.photoService
      .addComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(
        tap(() => {
          this.commentForm.reset();
          alert("Comentário adicionado com sucesso");
        })
      );
  }
}
