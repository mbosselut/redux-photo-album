export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD';

export function helloWorld(firstName, lastName) {
    return {
        type: NEW_HELLO_WORLD,
        payload: {
            //Object literal property value shorthand
            firstName,
            lastName
        }
    };
}
