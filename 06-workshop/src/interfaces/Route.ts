export interface Routes {
    [key: string]: () => Promise<void>;
}