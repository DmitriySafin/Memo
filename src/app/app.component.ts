import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './service/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  card = []

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    const items = this.localStorageService.getItems();
    if (items.length === 0) {
      this.localStorageService.setItem(); // Сохраняем только если данных нет
    }
    this.card = this.localStorageService.getItems(); // Загружаем данные из local storage
  }
}
