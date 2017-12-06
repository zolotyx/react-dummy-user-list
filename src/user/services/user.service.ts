import { RequestParams } from '../../shared/utils';

import http from '../../shared/api/api.service';

let hardcodedErrorsCount: number = 1;

const defaultRequestParams: RequestParams = {
  page: 1,
  per_page: 4
};

export const USER_API_ENDPOINT = '/api/users';

export const UserService = {
  list: (requestParams?: RequestParams) => {
    const params: RequestParams = {
      ...defaultRequestParams,
      ...requestParams,
      delay: 1 // API will wait for 1 second until the response is returned
    };
    // show error for second page to show error
    if (`${params.page}` === '2' && hardcodedErrorsCount) {
      hardcodedErrorsCount--;
      return Promise.reject({
        response: {
          statusText: 'The second page can not be loaded. (To check error handling) It should work next time'
        }
      });
    }

    return http.get(USER_API_ENDPOINT, { params });

  },
  get: (id: string | number) => {
    return http.get(`${USER_API_ENDPOINT}/${id}`);
  }
};
