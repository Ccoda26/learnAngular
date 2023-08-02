import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() postId?: number;
  @Input() postTitle?: string;
  @Input() postContent?: string;
  @Input() postCreateAt?: Date;
  @Input() postLoveIt?: number;

  constructor() { }

  ngOnInit(): void {
  }

  LoveIt(){
    this.postLoveIt = 1; 
  }

  DontLoveIt(){
  this.postLoveIt = 2;
  }

  getcolor(){
    if(this.postLoveIt === 1){
      return '#A7C19C';
    }else if(this.postLoveIt === 2){
      return '#E68585';
    }else{
      return 'white';
    }
  }
}
