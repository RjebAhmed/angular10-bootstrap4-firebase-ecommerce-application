import { UserService } from './../../services/user.service';
import { User } from './../../interfaces/user.interface';
import { AuthService } from './../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  errorMessage: string = ''
  constructor(private as: AuthService, private us: UserService, private router: Router) { }

  ngOnInit() {
  }
  singup(form) {
    let data: User = form.value
    console.log(data.email);
    console.log(typeof data.email)

    this.as.singup(data.email, data.password)
      .then(rst => {
        this.errorMessage = ''
        this.us.addNewUser(rst.user.uid, data.name, data.adress)
        this.router.navigate(['/'])

      })
      .catch(err => {
        this.errorMessage = err.message
      })
  }
}
