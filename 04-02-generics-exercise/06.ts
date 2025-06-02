type Choose<T, K extends keyof T> = {
    [Key in K]: T[Key];
}

type anotherType = {
    time: Date,
    duration: number,
    test: () => string,
    val: 200 | 300,
    user: {
        name: string,
        age: number
    }
}

type nestedUserAndTime = 'user' | 'time'
type extracted2 = Choose<anotherType, nestedUserAndTime>
