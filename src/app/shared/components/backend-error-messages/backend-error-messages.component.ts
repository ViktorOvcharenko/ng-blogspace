import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import * as fromSharedModels from '../../models';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() errors: fromSharedModels.BackendErrors;
  errorMessages: string[];

  ngOnInit() {
    this.errorMessages = Object.keys(this.errors)
      .map((name: string) => {
        const messages = this.errors[name].join(', ');

        return `${name} ${messages}`;
      });
  }
}
