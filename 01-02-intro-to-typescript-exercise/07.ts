function unknownResponse(arg: unknown): string {
    if ('value' in (arg as any) && typeof (arg as any).value === 'string') {
        return (arg as any).value;
    }

    return '-';
}

console.log(unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));
console.log(unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
console.log(unknownResponse({ code: 301, text: 'Moved Permanently' }));
