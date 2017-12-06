jest.useFakeTimers();

import { USER_API_ENDPOINT, UserService } from './user.service';
import http from '../../shared/api/api.service';
// jest.useFakeTimers();
it('should call http.get correctly if UserService.get has been called', () => {
  spyOn(http, 'get');

  const id = 1;
  UserService.get(id);
  expect(http.get).toHaveBeenCalledWith(`${USER_API_ENDPOINT}/${id}`);

});


it('should call http.get correctly if UserService.list has been called', () => {
  spyOn(http, 'get');


  UserService.list();
  jest.runAllTimers();
  expect(http.get)
    .toHaveBeenCalledWith(USER_API_ENDPOINT, { params: { delay: 1, page: 1, per_page: 4 } });

});
