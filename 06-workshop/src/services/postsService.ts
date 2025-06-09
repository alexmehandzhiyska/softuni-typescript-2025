import { ApiService } from './api';
import type { Post } from '../interfaces/Post';
import { BASE_URL } from '../constants';

export class PostsService extends ApiService<Post> {
    constructor() {
        super(`${BASE_URL}/posts`);
    }
}