import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ShareModule } from 'src/app/share/share.module';

export interface IdeveloperCard {
  name: string;
  lastName: string;
  tel: number;
  image: string;
  post: string;
  id: number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  cards: IdeveloperCard[] = [];
  newCard: IdeveloperCard = {
    name: '',
    lastName: '',
    tel: 0,
    image: '',
    post: '',
    id: 0,
  };
  myForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPhone: new FormControl('', Validators.pattern('[0-9]{11}')),
    userLastName: new FormControl('', Validators.required),
  });
  openFormBtn: boolean = false;
  constructor() {
    this.loadContacts();
    this.startCard(); // Инициализируем карточки при создании компонента
  }

  loadContacts() {
    const storedCards = localStorage.getItem('contacts');
    if (storedCards) {
      this.cards = JSON.parse(storedCards);
    }
  }

  startCard() {
    if (this.cards.length === 0) {
      this.cards = [
        {
          name: 'Дмитрий',
          lastName: 'Сафин',
          tel: 8922049942,
          image: '',
          post: 'АСУ',
          id: 1,
        },
        {
          name: 'Алексей',
          lastName: 'Островский',
          tel: 8922049942,
          image: '',
          post: 'АСУ',
          id: 2,
        },
        {
          name: 'Маргарита',
          lastName: 'Чикурова',
          tel: 8922049942,
          image: '',
          post: 'АСУ',
          id: 3,
        },
        {
          name: 'Валерий',
          lastName: 'Баруткин',
          tel: 8922049942,
          image: '',
          post: 'АСУ',
          id: 4,
        },
        {
          name: 'Игорь',
          lastName: 'Ошурков',
          tel: 8922049942,
          image: '',
          post: 'АСУ',
          id: 5,
        },
      ];
      this.saveContacts();
    }
  }

  saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(this.cards));
  }

  addCard() {
    this.openFormBtn = true;
  }

  closeCard(){
    this.openFormBtn = false;
  }

  submitForm() {
    console.log(this.myForm);
  }
}

// 1. Создать 5 готовых карточек и загрузить их в локальное хранилище с возможностью удалить
// 2. Добавить возможность добавление новой карточки где открывается форма с именем и т.д
// 3. Добавить возможность удалить карточку
// 4. Добавить возможность редактировать карточку
