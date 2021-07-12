import { PostService } from './posts/post.service';
import { Post } from './posts/post.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  storedPosts: Post[] = [];

  constructor() {}

  onPostAdded(post: Post) {
    this.storedPosts.push(post);
  }
}
