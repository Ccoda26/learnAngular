import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { BlogService} from './service/blog.service';
import { AuthComponent } from './auth/auth.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import {RouterModule, Routes} from '@angular/router'
import { AuthService } from './service/auth.service';
import { SinglePostComponent } from './single-post/single-post.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGard } from './service/auth-guard.service';

  
const AppRoutes : Routes = [
  { path: 'blog', canActivate:[AuthGard], component: BlogViewComponent},
  { path: 'blog/:id', canActivate:[AuthGard], component:SinglePostComponent},
  { path: 'auth', component:AuthComponent},
  { path: '', component:AppComponent},
  {path: 'not-found', component:FourOhFourComponent },
  {path: '**', redirectTo: 'not-found' },
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AuthComponent,
    BlogViewComponent,
    SinglePostComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
    
  ],
  providers: [
    BlogService,
    AuthService,
    AuthGard,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule{ }
