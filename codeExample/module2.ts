import { A2 } from './module';
import * as JSM from './module';

/**
 * Desription
 * @param {string} param1 Title param1, test
 * @return {string} Something
 */
export function func1(param1: string) {
    if (!param1 || typeof param1 !== "string" ) {
        return null;
    }

    return `text ${param1 + new A()}`;
}

export async function asFunc2() {
    // TODO: todo.
    return 'asd';
}

export async function asFunc3() {
    let s = await asFunc2();
}

export class A {
    constructor() {
        const a = new A2();
        const b = new JSM.B();
    }
}

export class B<T2> extends A {
    private a = "asd";

    constructor() {
        super();
        this.a = "1";
    }

    lambda = (x: number, y: A) => {
        this.generic<A>(y);
        return;
    }

    async method() {
        return;
    }

    generic<TParam>(param: TParam) {
        let cast = <any>param;
    }

    generic2<TParam>(param: TParam, b: B<A>) {
        let cast = <any>param;
    }
}

export class B2<T1> extends B<A> {
}

function func4() {
    const b = new B<A>();
}