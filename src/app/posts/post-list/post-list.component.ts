import { PostService } from './../post.service';
import { Post } from './../post.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postSub: Subscription = new Subscription();

  constructor(public postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postSub = this.postService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    // remove the subscription and prevent memory leak
    this.postSub.unsubscribe();

  }
}
