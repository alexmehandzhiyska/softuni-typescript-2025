function formatPerson(personInfo: [string, number, string]): string {

    return `Hello, my name is ${personInfo[0]} and my age is ${personInfo[1]}`;
}

console.log(formatPerson(['Pen4o', 20, 'Ivanov']));

// tuple = array with specified number and type of elements