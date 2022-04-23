import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import ModalIds from '../utils/modals-id';

@Injectable({
  providedIn: 'any',
})

// Сервис для открытия и закрытия модальных окон, у каждой модалки есть код (прописаны в
// ./utils/modals-id.ts), по которому её можно открыть. None - модальные окна скрыты
export class ModalService {
  modalId: string = ModalIds.NONE;

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
