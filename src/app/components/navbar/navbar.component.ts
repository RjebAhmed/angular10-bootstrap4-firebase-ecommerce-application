import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUser: boolean = false
  isAdmin: boolean = false
  constructor(private as: AuthService) { }

  ngOnInit() {
    this.as.user.subscribe(user => {
      if (user) {


        this.isUser = true
        this.as.userId = user.uid
        if (user.email === "admin@gmail.com") {
          this.isAdmin = true
        }
      }
      else {
        this.isUser = false
        this.isAdmin = false

        this.as.userId = ''

      }

    })
  }
  logout() {
    this.as.logout().then(() => {
      console.log("hello world !!");

    })
  }
}
