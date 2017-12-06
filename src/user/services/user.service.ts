import { RequestParams } from '../../utils';

import http from '../../shared/api/api.service';

let hardcodedErrorsCount: number = 1;

const defaultRequestParams: RequestParams = {
  page: 1,
  per_page: 4
};

export const UserService = {
  get: (requestParams?: RequestParams) => {
    const params: RequestParams = {
      ...defaultRequestParams,
      ...requestParams
    };
    if (params.page === 2 && hardcodedErrorsCount) {
      hardcodedErrorsCount--;
      return Promise.reject({
        data: {
          message: 'The second page can not be loaded. (To check error handling) It should work next time'
        }
      });
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(http.get('https://reqres.in/api/users', { params }));
      }, 2000);
    });
  }
};
