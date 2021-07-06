import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  posts = [
    { title: 'First Post', content: "This it the first post's content" },
    { title: 'Second Post', content: "This it the second post's content" },
    { title: 'Third Post', content: "This it the third post's content" },
  ];
}
