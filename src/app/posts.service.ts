import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Post} from "./posts/post.interface";
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
  }

  search(term: string) {
    return of({
      firstName: 'Eliran',
      lastName: 'Eliassy'
    });
  };
}
