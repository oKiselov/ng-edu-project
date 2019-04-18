import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isReactive: boolean;
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Anna'];

  ngOnInit() {
    this.isReactive = true;
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
        'gender': new FormControl(this.genders[0]),
        'hobbies': new FormArray([])
    });

    this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    );

    this.signupForm.statusChanges.subscribe(
      (value) => console.log(value)
    );

    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Max',
    //     'email': 'sdsd@mk.com'
    //   }
    // });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const prom = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({'email is forbidden': true});
          } else {
            resolve(null);
          }
        }, 1500);
      });
      return prom;
  }




  // @ViewChild('f') signupForm: NgForm;
  // defaultQuestion = 'pet';
  // answer = '';
  // genders = ['male', 'female'];
  // user = {
  //   username:'',
  //   email:'',
  //   secret:'',
  //   answer: '',
  //   gender:''
  // };
  // submitted = false;

  // // not the best approach
  // // suggestUserName() {
  // //   const suggestedName = 'Superuser';
  // //   this.signupForm.setValue({
  // //     userData: {
  // //       username: suggestedName,
  // //       email: ''
  // //     },
  // //     secret: 'pet',
  // //     questionAnswer: '',
  // //     gender: 'male'
  // //   });
  // // }

  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //   this.signupForm.form.patchValue({
  //     userData: {
  //       username: suggestedName
  //     }});
  // }

  // // onSubmit(form: NgForm) {
  // //   console.log(form);
  // // }

  // onSubmit() {
  //   this.submitted = true;
  //   this.user.username = this.signupForm.value.userData.username;
  //   this.user.email = this.signupForm.value.userData.email;
  //   this.user.secret = this.signupForm.value.secret;
  //   this.user.answer = this.signupForm.value.questionAnswer;
  //   this.user.gender = this.signupForm.value.gender;

  //   this.signupForm.reset();
  // }
}
