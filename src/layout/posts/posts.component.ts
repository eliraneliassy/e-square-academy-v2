import { Component, OnInit } from '@angular/core';
import { PostsService } from "src/app/service/posts/posts.service";
import { Post } from "src/app/interface/posts/post.interface";
import {
  debounceTime, 
  /* Emits a notification from the source Observable only after a particular time span has passed without another source emission. */
  delay, 
  /* Delays the emission of items from the source Observable by a given timeout or until a given Date. */
  distinctUntilChanged,
  /* Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item, using a property accessed by using the key provided to check if the two items are distinct. */
  map, 
  /* Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable. */
  Observable, of,
  Subject, 
  /* A Subject is a special type of Observable that allows values to be multicasted to many Observers. Subjects are like EventEmitters. */
  Subscription, 
  /* Represents a disposable resource, such as the execution of an Observable. A Subscription has one important method, unsubscribe, that takes no argument and just disposes the resource held by the subscription. */
  switchMap, 
  /* Projects each source value to an Observable which is merged in the output Observable, emitting values only from the most recently projected Observable. */
  timer
} from "rxjs";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  public comments: any[] = [];

  searchSubject$ = new Subject<string>();

  subscription?: Subscription; // subscription is optional, so it may be undefined

  constructor(private postsService: PostsService) {
    console.log('constractor works')
    this.postsService.getPosts().subscribe((posts: Post[]) => { 
      //no results without subscibing to the observable
      //returns all posts from an http request
      this.posts = posts;
    });

   }
 
   ngOnInit() {
    console.log('Component init');

    this.subscription = this.searchSubject$ 
      //searchSubject$ is a stream object (observable)
      .pipe(
        debounceTime(300), /* wait 0.3s for the next .next() */
        distinctUntilChanged(), /* notify for distinct change in the searchSubject$  var */
        switchMap((term: string) => this.postsService.search(term)), /* return a string of first,last name as an observable sequence. */
      )
      .subscribe(
        (obj: any) => { 
          /* change type any to stricter type later */
          console.log(obj) //logging stream
        }
    )
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe(); /* destroys the subscription for the comments */
  }

  search(event : any){
    this.searchSubject$.next(event.value); //enters the value to the subject
  }

  showComments(){
    console.log('show comments was clicked')
    this.postsService.getCommentToPostById(1) /* (commentID) */
      .pipe(
        // delay(3000) //wait 3s before showing the comments
        // map((comments: any[]) => comments.map(comment => {
        //   comment.email
        //   console.log(comment.email)
        // })))
        map((comments: any[]) => 
          comments.map((comment) =>
            comment.email
          )
        ))
        /* returns all comments for post with id 1, and returns to var comments the email of each comment */
      .subscribe((comments: any[]) => 
      {
        console.log('comments', comments)
        this.comments = comments; 
        console.log('this.comments', this.comments)
      })
      console.log('this.comments', this.comments)
  }
  

}
