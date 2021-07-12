import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  storedPosts:any = []
  title = 'MEAN-app';

  onPostAdded(post:any){
    this.storedPosts.push(post)
  }
}
