import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from "../posts.service";
import {Post} from "./post.interface";
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  map,
  Observable, of,
  Subject,
  Subscription,
  switchMap, tap,
  timer
} from "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnDestroy, OnInit{

  posts: Post[] = [];
  comments: any[] = [];

  searchSubject$ = new Subject<string>();

  subscription?: Subscription;

  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });

    // this.subscription = timer(0, 1000).subscribe(console.log);


  }

  ngOnInit() {
    console.log('Component init');

    this.subscription = this.searchSubject$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap((value) => console.log('before switchMap value is', value)),
        switchMap((term: string) => this.postsService.search(term)),
        tap((value) => console.log('After switchMap value is', value)),
      )
      .subscribe(
        (obj: any) => {
          console.log(obj)
        }
    )
  }

  ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

  search(event : any){
    this.searchSubject$.next(event.value);
  }

  showComments(){
    this.postsService.getCommentToPostById(1)
      .pipe(
        // delay(3000)
        map((comments: any[]) => comments.map(comment => comment.email))
      )
      .subscribe(
      (comments: any[]) => {
        this.comments = comments;
      }
    )
  }

}
