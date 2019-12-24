import { TestBed } from '@angular/core/testing';

import { UserRegisterFormService } from './user-register-form.service';

describe('UserRegisterFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRegisterFormService = TestBed.get(UserRegisterFormService);
    expect(service).toBeTruthy();
  });
});
