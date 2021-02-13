import { Component, Input, OnInit } from '@angular/core';
import { BlogService} from '../service/blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  
  Posts: any = [];
 
 
constructor(private blogService: BlogService ){
 
}

ngOnInit(){
 this.Posts = this.blogService.getPosts();
}

}
