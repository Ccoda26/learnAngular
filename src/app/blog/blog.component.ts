import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  
  @Input() postTitle?: string;
  @Input() postContent?: string;
  @Input() postCreateAt?: Date;
  @Input() postLoveIt?: string;

  constructor() { }

  ngOnInit(): void {
  }

  LoveIt(){
    console.log('LoveIt');
  }

  DontLoveIt(){
    console.log("dont");
  }
}
