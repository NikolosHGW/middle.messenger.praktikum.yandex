import { queryStringify } from '../../utils/helpers';
import { METHODS } from './constants';
import { HTTPMethod, OptionsWithMethod } from './types';

class CustomFetch {
  private rootUrl: string;

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl;
  }

  get: HTTPMethod = (_url, options = {}) => {
    let url = _url;
    if (options.data) {
      url += queryStringify(options.data);
    }
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  };

  put: HTTPMethod = (url, options = {}) => {
    const newOptions = { ...options, method: METHODS.PUT };

    return this.request(url, newOptions, options.timeout);
  };

  post: HTTPMethod = (url, options = {}) => {
    const newOptions = { ...options, method: METHODS.POST };

    return this.request(url, newOptions, options.timeout);
  };

  delete: HTTPMethod = (url, options = {}) => {
    const newOptions = { ...options, method: METHODS.DELETE };

    return this.request(url, newOptions, options.timeout);
  };

  request = (url: string, options: OptionsWithMethod, timeout = 5000) => {
    const {
      method,
      data,
      headers,
      withCredentials = true,
    } = options;
    const fullUrl = this.rootUrl + url;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, fullUrl);
      if (headers) {
        Object.entries(headers).forEach(([key, head]) => xhr.setRequestHeader(key, head));
      } else {
        xhr.setRequestHeader('content-type', 'application/json');
      }

      if (withCredentials) {
        xhr.withCredentials = true;
      }

      xhr.onload = () => {
        resolve(xhr);
      };

      const handleError = () => {
        reject(xhr);
      };
      xhr.timeout = timeout;

      xhr.onabort = handleError;
      xhr.onerror = handleError;
      xhr.ontimeout = handleError;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

export { CustomFetch };
