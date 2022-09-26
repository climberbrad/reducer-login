export async function login(username: string, password: string ) {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            if (username === 'test' && password === 'password') {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}