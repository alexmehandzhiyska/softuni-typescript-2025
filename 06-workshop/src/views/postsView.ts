import type { Post } from '../interfaces/Post';
import { services } from '../services/services';
import { HtmlRenderer } from '../utils/html';

export async function postsTemplate(): Promise<void> {
    const posts = await services.postsService.getAll();

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