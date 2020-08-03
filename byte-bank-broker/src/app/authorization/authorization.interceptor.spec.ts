import { TestBed } from '@angular/core/testing';
import { AuthorizationInteceptor } from './authorization.interceptor';

describe('AuthorizationInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AuthorizationInteceptor],
    })
  );

  it('should be created', () => {
    const interceptor: AuthorizationInteceptor = TestBed.inject(
      AuthorizationInteceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
