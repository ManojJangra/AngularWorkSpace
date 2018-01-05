import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  post: Post[];
  isEdit: boolean = false;

  constructor(private dataservice: DataService) {
    console.log("ajsdhfalsjkhfajkf");
  }

  ngOnInit() {
    console.log("ajsdhfalsjkhfajkf");
    this.name = "Manoj Jangra";
    this.email = "manojsilk@gmail.com";
    this.age = 32;
    this.address = {
      street: "9898",
      city: "hisar",
      state: "Haryana"
    };
    this.hobbies = ["Cricket", "Kho Kho"];

    this.dataservice.getPosts().subscribe(post => {
      // console.log(post);
      this.post = post;
    });
  }
  onclick() {
    this.name = "Jai Shree Ram";
    this.hobbies.push("Android ");
  }
  AddHobby(item) {
    console.log("Java");
    this.hobbies.unshift(item);
    return false;
  }
  deleteHobby(item) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === item) {
        this.hobbies.splice(i, 1);
      }
    }
  }
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
