import { Injectable } from '@angular/core';

export enum txtDes {
  txtPk = "Здесь вы можете оставить свою заявку на Вашу проблему связанную с Вашим Компьютером",
  txtPrint = "Здесь вы можете оставить свою заявку на Вашу проблему связанную с Вашим Принтером",
  txtNav = "Здесь вы можете оставить свою заявку на Вашу проблему связанную с программой Navision",
  txtIthernet = "Здесь вы можете оставить свою заявку на Вашу проблему связанную с сетью/интернетом а так же удалённым доступом",
  txtMark = "Здесь вы можете оставить свою заявку на Вашу проблему связанную с сложностями принятия товара, отгрузки, сборки, контроля и т.п",
  txtDelInst = "Здесь вы можете оставить свою заявку на установку/удаление разрешения на скачивание тех или иных программ",
}

export interface CardItem{
  title: string,
  imageSrc: string,
  description: string,
  id: number
}

export interface cardNews extends CardItem {
number: number;
}
@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  cardMain: CardItem[];
  cardNews: cardNews[];
  constructor() {
    this.cardMain = [
      {
        title: 'Проблемы с Компьютером',
        description: txtDes.txtPk,
        imageSrc: "assets/images/problemsPk.webp",
        id: 1
      },
      {
        title: 'Принтер',
        description: txtDes.txtPrint,
        imageSrc: "assets/images/problemsPrint.webp",
        id: 2
      },
      {
        title: 'Navision',
        description: txtDes.txtNav,
        imageSrc: "assets/images/problemsNavision.webp",
        id: 3
      },
      {
        title: 'Сеть Интернет',
        description: txtDes.txtIthernet,
        imageSrc: "assets/images/problemsInhernet.webp",
        id: 4
      },
      {
        title: 'Товар/Маркировка',
        description: txtDes.txtMark,
        imageSrc: "assets/images/problemsMark.webp",
        id: 5
      },
      {
        title: 'Удаление/Установка',
        description: txtDes.txtDelInst,
        imageSrc: "assets/images/deleteInstall.webp",
        id: 6
      },
      {
        title: 'Другое',
        description: "Если что-то не конкретное",
        imageSrc: "assets/images/problemOther.webp",
        id: 7
      },
    ];
    this.cardNews = [];
  }

  setItemCard() {
    // Сохраняем массив cardMain в localStorage
    localStorage.setItem('cardMain', JSON.stringify(this.cardMain));
  }

  getItemsCard() {
    // Получаем item из localStorage и преобразуем обратно в массив объектов
    const items = localStorage.getItem('cardMain');
    return items ? JSON.parse(items) : [];
  }
}
