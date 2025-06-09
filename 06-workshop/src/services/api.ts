import { log } from '../utils/decorators';

export abstract class ApiService<T, CreateT = T> {
    protected baseServiceUrl: string;

    constructor(url: string) {
        this.baseServiceUrl = url;
    }

    @log
    async getAll(): Promise<T[]> {
        const res = await fetch(this.baseServiceUrl);
        return await res.json();
    }

    @log
    async create(itemData: CreateT): Promise<T> {
        const res = await fetch(this.baseServiceUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemData)
        });

        return await res.json();
    }

    @log
    async update(id: number, itemData: T): Promise<T> {
        const res = await fetch(`${this.baseServiceUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemData)
        });

        return await res.json();
    }

    @log
    async delete(id: number): Promise<void> {
        await fetch(`${this.baseServiceUrl}/${id}`, {
            method: 'DELETE'
        });
    }
}