/**
 * Desription
 * @param {string} param1 Title param1, test
 * @return {string} Something
 */
export function func1(param1) {
    if ( !data || typeof data !== "string" ) {
        return null;
    }
    return `${param1}`;
}

export async function asFunc2() {
    // TODO: todo.
    return 'asd';
}

export async function asFunc3() {
    let s = await asFunc2();
}

export class A {
    constructor() {}
}

export class B extends A {
    a = "asd";
    constructor() {
        super();
        this.a = "1";
    }
}

function func4() {
    const b = new B();
}