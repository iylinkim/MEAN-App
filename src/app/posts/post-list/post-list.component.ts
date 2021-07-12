import { Component, Input } from '@angular/core';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  @Input() posts:Post[] = [];

}
