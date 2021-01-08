import { Component, OnInit } from '@angular/core';

 // create a person interface with the properties of name and isTwentyOne
 interface Person {
  name: string,
  isTwentyOne: boolean
}
@Component({
  selector: 'app-mad-libs',
  templateUrl: './mad-libs.component.html',
  styleUrls: ['./mad-libs.component.css']
})


export class MadLibsComponent implements OnInit {

  // create an array of Persons
  people: Person[]= [
    {name: "Tiia", isTwentyOne: true},
    // I'm not creative - my cats
    {name: "Marvin", isTwentyOne: true},
    {name: "Moe", isTwentyOne: true},
    {name: "Yuri", isTwentyOne: false},
  ]
 
  // add a title
  title: string = "Tiia's Dive Bar and Veg Grill"

  // order beer function takes in a name parameter and console logs the order
  orderBeer = function(name: string): void {
    console.log(`Bartender! A beer and a shot at ${name}'s table please!`)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
