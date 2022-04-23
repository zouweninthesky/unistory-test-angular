import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalId = '';

  modalIdChanged: Subject<string> = new Subject<string>();

  constructor() {
    this.modalIdChanged.subscribe((value) => {
      this.modalId = value;
    });
  }

  getModalId() {
    return this.modalId;
  }

  setModalId(id: string) {
    this.modalIdChanged.next(id);
  }
}
