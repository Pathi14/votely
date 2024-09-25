import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
  @Input() title: string = '';
  @Output() hasConfirmed = new EventEmitter<boolean>();

  close(hasConfirmed = false) {
    this.hasConfirmed.emit(hasConfirmed);
    console.log(`confirmed ? ${hasConfirmed}`);
  }
}
