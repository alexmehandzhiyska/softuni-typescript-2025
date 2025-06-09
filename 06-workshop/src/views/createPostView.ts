import { HtmlRenderer } from '../utils/html';

export async function createPostView(): Promise<void> {
    const template = `
        <form>
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
}