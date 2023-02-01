import { Component, OnInit } from '@angular/core'
import { collection, collectionData, DocumentData, Firestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-firebase-demo'

  books$: Observable<DocumentData[]>

  constructor(firestore: Firestore) {
    // const collection = collection(firestore, 'items')
    this.books$ = collectionData(collection(firestore, 'books'))
  }
  ngOnInit(): void {
    this.books$.subscribe((books) => console.log(books))
  }
}
