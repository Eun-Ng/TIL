import axios, { AxiosError, AxiosResponse } from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body?: string;
}

interface Created {}

interface Data {
  title: string;
  body: string;
  userId: number;
}

interface Config<D = any> {
  method?: 'post' | 'get' | 'put' | 'patch' | 'delete' | 'head' | 'options';
  url?: string;
  data?: D;
}

interface Hi {
  get: <T = any, R = AxiosResponse<T>>(url: string) => Promise<R>;
  post: <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data: D,
  ) => Promise<R>;
  (config: Config): void;
  (url: string, config: Config): void;
  isAxiosError: (error: unknown) => error is AxiosError;
}

const hi: Hi = axios;

(async () => {
  try {
    const responseGet = await hi.get<Post, AxiosResponse<Post>>(
      'https://jsonplaceholder.typicode.com/posts/1',
    );

    const responsePost = await hi.post<Created, AxiosResponse<Created>, Data>(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    );
    const responsePost2 = await hi({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    });

    console.log(responseGet.data.userId);
    console.log(responseGet.data.id);
    console.log(responseGet.data.title);
    console.log(responseGet.data.body);

    // axios 에러가 아닌 다른 에러가 들어올 경우, catch문 자체에서 에러 핸들링을 못한채 고장날 수 있음.
    // } catch (error) {
    //   const errorResponse = (error as AxiosError).response?.data;
    //   console.error(errorResponse);
    // }
  } catch (error) {
    // 커스텀 타입가드 활용
    if (error instanceof AxiosError) {
      error.response;
    }
    const errorResponse = (error as AxiosError).response?.data;
    console.error(errorResponse);
  }

  try {
  } catch (error) {
    // message: {'서버 장애입니다. 다시 시도해주세요.'}
    if (hi.isAxiosError(error)) {
      console.error(
        (error.response as AxiosResponse<{ message: string }>)?.data.message,
      );
    }
  }
})();
