import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  private usersData: any;
  private usersUpdated = new Subject();


  getPosts() {
    this.http.get('http://localhost:3000/api/initialvalues')
    .subscribe((trsnformedUsers) => {
      this.usersData = trsnformedUsers;
      this.usersUpdated.next(this.usersData);
    });
  }

  getPostUpdateListner() {
    return this.usersUpdated.asObservable();
  }

}
