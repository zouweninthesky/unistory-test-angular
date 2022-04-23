import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalModule } from '../modal.module';

@Injectable({
  providedIn: 'any',
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
