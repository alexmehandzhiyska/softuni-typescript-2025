export function decorator1<T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
        protected _offset: number = 3;
    }
}
export function decorator2(target: object, methodName: string, descriptor: PropertyDescriptor) { }
export function decorator3(target: object, methodName: string, descriptor: PropertyDescriptor) { }
export function decorator4<T extends abstract new (...args: any[]) => {}>(constructor: T) {
    abstract class ExtendedPartialMessageEncoder extends constructor {
        public static forbiddenSymbols: string[] = ['_', ',', '.', '!', '?', '-', ';', ' ', '"', '\''];
    }

    return ExtendedPartialMessageEncoder;
}
