import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserEnrollmentService } from '../user-enrollment.service';



@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('123 Fake st.', 'London','On', 'N1N1N1','Rob', 'rob@test.com', 1234567890, 'default', 'morning', true);

  topicHasError = true;
  submittedForm = false;
  errorMessage = '';

  validateTopic(value) {
    if (value == 'default') {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submittedForm = true;
    this._userEnrollmentService.enroll(this.userModel)
      .subscribe(
      data => console.log('Success!', data),
      // error => console.log('Error!', error)
      error => this.errorMessage = error.statusText
    )
  }

  constructor(private _userEnrollmentService: UserEnrollmentService) { }

  ngOnInit() {
  }

}
