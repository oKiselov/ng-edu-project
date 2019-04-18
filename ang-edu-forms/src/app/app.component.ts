import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isReactive: boolean;
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username:'',
    email:'',
    secret:'',
    answer: '',
    gender:''
  };
  submitted = false;

  // not the best approach
  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //   this.signupForm.setValue({
  //     userData: {
  //       username: suggestedName,
  //       email: ''
  //     },
  //     secret: 'pet',
  //     questionAnswer: '',
  //     gender: 'male'
  //   });
  // }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }});
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }

  ngOnInit() {
    this.isReactive = true;
  }
}
