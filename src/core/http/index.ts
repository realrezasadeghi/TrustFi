import axios from 'axios';

class HttpClient {
  private static http: HttpClient;

  static getInstance() {
    if (!HttpClient.http) {
      HttpClient.http = axios.create({
        baseURL: 'https://api.coingecko.com/api/v3',
        headers: {
          'x-cg-demo-api-key': '',
          'Content-Type': 'application/json',
        },
      });
    }
    return HttpClient.http;
  }
}

export default HttpClient;
