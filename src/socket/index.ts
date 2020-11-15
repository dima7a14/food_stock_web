import feathers, { Application } from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
import auth from '@feathersjs/authentication-client';
import { APIService, APIUser } from './types';

export class API implements APIService {
  private static _instance: API;
  private static STORAGE_KEY = 'FOOD_STORAGE_TOKEN';
  private socket: ReturnType<typeof io>;
  private app: Application;

  constructor(url: string) {
    this.socket = io(url);
    this.app = feathers();

    this.app.configure(socketio(this.socket))
    this.app.configure(auth({
      storageKey: API.STORAGE_KEY,
    }));

    return this;
  }

  static getInstance(url: string) {
    if (!API._instance) {
      API._instance = new API(url);
    }

    return API._instance;
  }
  

  async authenticate(email: string, password: string) {
    const result = await this.app.authenticate({
      strategy: 'local',
      email,
      password,
    });
  
    return result;
  }

  async register(email: string, password: string) {
    const result = await this.app.service('users').create({ email, password });

    return result as APIUser;
  }

  async logout() {
    await this.app.logout();
  }
}

export const api = API.getInstance('localhost:3030');
