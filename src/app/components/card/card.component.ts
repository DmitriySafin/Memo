import { Component, OnInit } from '@angular/core';
import { CardItem, LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent   {
cards: CardItem[] = [];

constructor(localStorageService: LocalStorageService){
  this.cards = localStorageService.getItems()
}

}
