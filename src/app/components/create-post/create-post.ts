import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-post.html',
})
export class CreatePostComponent {
  private postService = inject(PostService);

  title: string = '';
  body: string = '';
  response: any = null;

  submitPost() {
    const newPost = {
      title: this.title,
      body: this.body,
      userId: 1
    };

    this.postService.createPost(newPost).subscribe(res => {
      this.response = res;
      console.log('Created:', res);
    });
  }
}