import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(
    public postService: PostsService,
    public fb: FormBuilder
    ) { }

  enteredTitle = '';
  enteredContent = '';
  genderOptions: [] = [];
  id = '';
  age: any;
  pincode: any;
  options: FormGroup;

  userData: any;
  transformedData: any;
  private postsSub: Subscription;

  ngOnInit() {

    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListner().subscribe(
      (fetchedUserData) => {
        this.userData = fetchedUserData;
        console.log( this.userData.data);
        this.transformedData = this.userData.data;

        this.initialize();
    });
  }


  public initialize() {

    this.transformedData.map(data => {
      if (data.key === 'gender') {
       this.genderOptions = data.options;
      }

      if (data.key === 'id') {
        this.id = data.value;
      }

      if (data.key === 'pin') {
        this.pincode = data.value;
      }

      if (data.key === 'age') {
        this.age = data.value;
      }
    });

    this.options = this.fb.group({
      activeUser: true,
      userId: this.id,
      age: this.age,
      pincode: this.pincode
  });
  }

  public addPost() {

  }
}
