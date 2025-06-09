import { services } from '../services/services';
import { HtmlRenderer } from '../utils/html';

export async function createPostView(): Promise<void> {
    const template = `
        <form id="create-post-form">
            <div>
                <label for="title">Title</label>
                <input type="text" name="title" id="title" />
            </div>

            <div>
                <label for="body">Body</label>
                <input type="text" name="body" id="body" />
            </div>

            <button type="submit">Create Post</button>
        </form>
    `;

    HtmlRenderer.render(template);

    const formEl = document.getElementById('create-post-form');
    formEl?.addEventListener('submit', createPost);
}

async function createPost(e: Event) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const title = formData.get('title') as string;
    const body = formData.get('body') as string;

    const result = await services.postsService.create({
        userId: 1,
        title,
        body
    });

    console.log(result);

}