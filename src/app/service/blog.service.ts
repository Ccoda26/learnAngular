import { Injectable } from "@angular/core";


export class BlogService {

   private Posts = [
        {
          id: 1,
          title : "le premier post",
          content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nesciunt nisi assumenda tempore veritatis sequi doloremque illum expedita ipsa, voluptatum doloribus corrupti similique esse minima animi quae necessitatibus accusamus aperiam, quam eaque ullam laboriosam id, eum illo. Quibusdam aperiam doloremque enim consequuntur nisi. Earum at voluptates, reprehenderit recusandae minima consequuntur adipisci maxime autem debitis, in quia molestias deleniti voluptate quisquam doloribus nam libero, optio ipsa rem inventore aliquid? Natus molestias illum quasi consequatur, itaque cupiditate sint nam distinctio delectus pariatur atque corrupti iusto ad necessitatibus autem. Sequi modi fuga libero, consequuntur sit dolore, rem ipsa quis non odit enim voluptatem!",
          createAt: new Date(),
          loveIt: 0
        },
        {
          id: 2,
          title : "le deuxieme post",
          content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nesciunt nisi assumenda tempore veritatis sequi doloremque illum expedita ipsa, voluptatum doloribus corrupti similique esse minima animi quae necessitatibus accusamus aperiam, quam eaque ullam laboriosam id, eum illo. Quibusdam aperiam doloremque enim consequuntur nisi. Earum at voluptates, reprehenderit recusandae minima consequuntur adipisci maxime autem debitis, in quia molestias deleniti voluptate quisquam doloribus nam libero, optio ipsa rem inventore aliquid? Natus molestias illum quasi consequatur, itaque cupiditate sint nam distinctio delectus pariatur atque corrupti iusto ad necessitatibus autem. Sequi modi fuga libero, consequuntur sit dolore, rem ipsa quis non odit enim voluptatem!",
          createAt: new Date(),
          loveIt: 0
        },
        {
          id: 3,
          title : "le troisieme post",
          content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nesciunt nisi assumenda tempore veritatis sequi doloremque illum expedita ipsa, voluptatum doloribus corrupti similique esse minima animi quae necessitatibus accusamus aperiam, quam eaque ullam laboriosam id, eum illo. Quibusdam aperiam doloremque enim consequuntur nisi. Earum at voluptates, reprehenderit recusandae minima consequuntur adipisci maxime autem debitis, in quia molestias deleniti voluptate quisquam doloribus nam libero, optio ipsa rem inventore aliquid? Natus molestias illum quasi consequatur, itaque cupiditate sint nam distinctio delectus pariatur atque corrupti iusto ad necessitatibus autem. Sequi modi fuga libero, consequuntur sit dolore, rem ipsa quis non odit enim voluptatem!",
          createAt: new Date(),
          loveIt: 0
        },
        {
            id: 4,
          title : "le quatrieme post",
          content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nesciunt nisi assumenda tempore veritatis sequi doloremque illum expedita ipsa, voluptatum doloribus corrupti similique esse minima animi quae necessitatibus accusamus aperiam, quam eaque ullam laboriosam id, eum illo. Quibusdam aperiam doloremque enim consequuntur nisi. Earum at voluptates, reprehenderit recusandae minima consequuntur adipisci maxime autem debitis, in quia molestias deleniti voluptate quisquam doloribus nam libero, optio ipsa rem inventore aliquid? Natus molestias illum quasi consequatur, itaque cupiditate sint nam distinctio delectus pariatur atque corrupti iusto ad necessitatibus autem. Sequi modi fuga libero, consequuntur sit dolore, rem ipsa quis non odit enim voluptatem!",
          createAt: new Date(),
          loveIt: 0
        }
      ];
      constructor(){
      } 
        
      getPosts() {
            return this.Posts;
          }

     getPostById(id: number){
         const Post = this.Posts.find(
             (s) => {
                 return s.id === id;
             }
         );
         return Post;
     }
     
}