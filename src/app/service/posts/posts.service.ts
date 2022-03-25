import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Post} from "src/app/interface/posts/post.interface";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  BASE_URL = `https://jsonplaceholder.typicode.com`;

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.BASE_URL}/posts`);
  }

  getCommentToPostById(postId: number) {
    let params: HttpParams = new HttpParams();
    params = params.append('postId', postId);

    return this.httpClient.get<any[]>(`${this.BASE_URL}/comments`, {params}) 
    /*change any to another stricter type later*/ 
  }

  search(term: string) {
    return of({ /* Converts the arguments to an observable sequence. */
      firstName: 'Eliran',
      lastName: 'Eliassy'
    });
  };
}
