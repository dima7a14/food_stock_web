import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
import auth from '@feathersjs/authentication-client';
import { APIUser } from './types';

const socket = io('localhost:3030');
const app = feathers<{ user: APIUser }>();

app.configure(socketio(socket));

app.configure(auth({
  storageKey: 'food_storage_token',
}));

interface AuthenticationResult {
  accessToken: string;
  authentication: {
    strategy: 'local';
  };
  user: APIUser;
}

export async function authenticate(email: string, password: string) {
  const result = await app.authenticate({
    strategy: 'local',
    email,
    password,
  }) as AuthenticationResult;

  return result;
}
