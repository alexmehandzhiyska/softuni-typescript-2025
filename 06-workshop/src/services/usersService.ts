import { ApiService } from './api';
import type { User } from '../interfaces/User';
import { BASE_URL } from '../constants';

export class UsersService extends ApiService<User> {
    constructor() {
        super(`${BASE_URL}/users`);
    }
}