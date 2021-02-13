import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{BlogService} from '../service/blog.service'

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  title ?: string = 'title';
  content ?: string= 'content';
  date ?: Date;


  constructor( private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.title = this.blogService.getPostById(+id)?.title;
    this.content = this.blogService.getPostById(+id)?.content;
    this.date = this.blogService.getPostById(+id)?.createAt;
  }

  
}
