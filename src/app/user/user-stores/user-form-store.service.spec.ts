import { TestBed } from '@angular/core/testing';

import { UserFormStoreService } from './user-form-store.service';

describe('UserFormStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFormStoreService = TestBed.get(UserFormStoreService);
    expect(service).toBeTruthy();
  });
});
