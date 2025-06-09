import { PostsService } from './postsService';
import { UsersService } from './usersService';

const postsService = new PostsService();
const usersService = new UsersService();

export const services = {
    postsService,
    usersService
};