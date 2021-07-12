import { PostService } from './../post.service';
import { Post } from './../post.model';
import { Component, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  postCreated = new EventEmitter<Post>();

  constructor(public postService: PostService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) return;

    this.postService.addPost(form.value.title, form.value.content);
  }
}
