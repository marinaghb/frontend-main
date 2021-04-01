export class HttpService {
    constructor(baseApiPath) {
        this.baseApi = baseApiPath
    }

    async get(path) {
        const response =  await fetch(`${this.baseApi}/${path}`);
        return response.json();
    }

    async post(path, body) {
        const stringifieldData = JSON.stringify(body);

        const response = await fetch(`${this.baseApi}/${path}`, {
            method: 'POST',
            body:stringifieldData,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        return response.json();
    }
}