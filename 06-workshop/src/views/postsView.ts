import type { Post } from '../interfaces/Post';
import { PostsService } from '../services/postsService';
import { HtmlRenderer } from '../utils/html';

const postsService = new PostsService();

export async function postsTemplate(): Promise<void> {
    const posts = await postsService.getAll();

    const template = `
        <h1>Posts</h1>
        <ul>
            ${posts.map(p => singlePostTemplate(p)).join('')}
        </ul>
    `;

    HtmlRenderer.render(template);
}

function singlePostTemplate(post: Post) {
    return `
        <li>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </li>
    `;
}