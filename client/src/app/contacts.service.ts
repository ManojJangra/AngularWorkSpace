import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Contact } from "./contact";
import "rxjs/add/operator/map";

@Injectable()
export class ContactService {
  constructor(private http: Http) {}

  //get  contact
  getContacts() {
    return this.http
      .get("http://localhost:3001/api/contacts")
      .map(res => res.json());
  }

  //Add  contact
  addContact(newContact) {
    var header = new Headers();
    header.append("Contact-Type", "application/json");
    return this.http
      .post("http://localhost:3001/api/contacts", newContact, {
        headers: header
      })
      .map(res => res.json());
  }

  //delete contact
  deleteContact(id) {
    return this.http
      .delete("http://localhost:3001/api/contact/" + id)
      .map(res => res.json());
  }
}
