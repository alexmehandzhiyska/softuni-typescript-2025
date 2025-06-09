export function log(target: object, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        console.log(`Method ${methodName} started!`);
        const start = performance.now();

        const result = await originalMethod.apply(this, args);

        const end = performance.now();

        console.log(`Method ${methodName} was executed in ${(end - start).toFixed(2)}ms`);
        return result;
    }

    return descriptor;
}