import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newsSections = [
    'Новости отдела Асу',
    'Новости отдела Маркетинга',
    'Новости отдела Сбыта',
    'Новости отдела Бухгалтерии',
    'Новости отдела Приёмки',
    'Новости Контроль',
    'Новости Сборка',
    'Новости отдела Сертификации'
  ];

  // Вы можете добавить свою логику для работы с новостями
  // Например, метод для обработки клика
  onNewsClick(newsItem: string): void {
    console.log(`Вы выбрали: ${newsItem}`);
    // Здесь вы можете добавить логику для загрузки или отображения новостей
  }
}