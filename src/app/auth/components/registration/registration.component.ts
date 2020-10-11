import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as fromAuthModels from '../../models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  @Input() isLoading: boolean;
  @Output() onSubmit: EventEmitter<fromAuthModels.RegistrationRequest> = new EventEmitter<fromAuthModels.RegistrationRequest>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(): void {
    const requestBody: fromAuthModels.RegistrationRequest = { user: { ...this.form.value } };

    this.onSubmit.emit(requestBody);
  }
}
