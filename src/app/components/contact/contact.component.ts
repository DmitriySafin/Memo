import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface IdeveloperCard {
  name: string;
  lastName: string;
  tel: number;
  image: string;
  post: string;
  id: number;
  email: string;
  position: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  cards: IdeveloperCard[] = [];
  myForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPhone: new FormControl('', Validators.pattern('[0-9]{11}')),
    userLastName: new FormControl('', Validators.required),
    userPosition: new FormControl('', Validators.required),
  });
  imageError: boolean = false;
  selectedImage: string = '';
  openFormBtn: boolean = false;

  constructor() {
    this.loadContacts();
    this.startCard();
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
          email: 'd.safin@fonb.ru',
          position: 'Систмный администратор',
          lastName: 'Сафин',
          tel: 8922049942,
          image: '../../../assets/images/logo.png',
          post: 'АСУ',
          id: 1,
        },
        {
          name: 'Алексей',
          email: 'a.ostrovsky@fonb.ru',
          position: 'Программист Электронные накладные',
          lastName: 'Островский',
          tel: 8922049942,
          image: '../../../assets/images/logo.png',
          post: 'АСУ',
          id: 2,
        },
        {
          name: 'Маргарита',
          email: 'm.chikurova@fonb.ru',
          position: 'Программист по обороту товра',
          lastName: 'Чикурова',
          tel: 8922049942,
          image: '../../../assets/images/logo.png',
          post: 'АСУ',
          id: 3,
        },
        {
          name: 'Валерий',
          email: 'v.bar@fonb.ru',
          position: 'Программист по Navision',
          lastName: 'Баруткин',
          tel: 8922049942,
          image: '../../../assets/images/logo.png',
          post: 'АСУ',
          id: 4,
        },
        {
          name: 'Игорь',
          email: 'i.oshurkov@fonb.ru',
          position: 'Руководитель отдела',
          lastName: 'Ошурков',
          tel: 8922049942,
          image: '../../../assets/images/logo.png',
          post: 'АСУ',
          id: 5,
        },
      ];
      this.saveContacts();
    }
  }

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
        this.imageError = false;
      };

      reader.onerror = () => {
        this.imageError = true;
      };

      reader.readAsDataURL(file);
    }
  }

  saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(this.cards));
  }

  addCard() {
    this.openFormBtn = true;
  }

  closeCard() {
    this.openFormBtn = false;
    this.myForm.reset();
  }

  submitForm() {
    if (this.myForm.valid) {
      const newCard: IdeveloperCard = {
        name: this.myForm.value.userName,
        lastName: this.myForm.value.userLastName,
        tel: +this.myForm.value.userPhone,
        email: this.myForm.value.userEmail,
        image: this.selectedImage,
        post: 'Асу',
        position: this.myForm.value.userPosition,
        id:
          this.cards.length > 0
            ? Math.max(...this.cards.map((card) => card.id)) + 1
            : 1,
      };
      this.cards.push(newCard);
      this.saveContacts();
      this.myForm.reset();
      this.selectedImage = '';
      this.openFormBtn = false;
    }
  }

  deleteCard(id: number) {
    this.cards = this.cards.filter((card) => card.id !== id);
    this.saveContacts();
  }

  editCard(card: IdeveloperCard) {
    this.myForm.patchValue({
      userName: card.name,
      userLastName: card.lastName,
      userPhone: card.tel,
      userEmail: card.email,
      userPosition: card.position,
    });
    this.openFormBtn = true; // Открываем форму
  }
}
