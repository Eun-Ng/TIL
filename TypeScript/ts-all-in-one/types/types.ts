declare global {
  namespace Express {
    export interface Response {
      eun: 'eun';
    }
    export interface Request {
      eun: 'eun';
    }
    export interface User {
      eun: 'eun';
    }
  }
}

interface Error {
  status: number;
}

export {};
