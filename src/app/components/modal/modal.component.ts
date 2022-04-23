import { Component } from '@angular/core';
import { ModalService } from '../../services/modal-serice/modal.service';

import ModalIds from 'src/app/services/modal-serice/modals-id';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(private modalService: ModalService) {}

  onClose() {
    this.modalService.setModalId(ModalIds.NONE);
  }
}
