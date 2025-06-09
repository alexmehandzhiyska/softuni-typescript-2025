import { ApiService } from './api';
import type { CreatePost, Post } from '../interfaces/Post';
import { BASE_URL } from '../constants';

export class PostsService extends ApiService<Post, CreatePost> {
    constructor() {
        super(`${BASE_URL}/posts`);
    }
}