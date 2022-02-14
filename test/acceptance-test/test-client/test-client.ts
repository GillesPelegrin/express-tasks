import {agent as request} from "supertest";
import {testUserString} from './test-users';
import {HttpStatusCode} from '../../../dist/infrastructure/error/http-status-code';

export default abstract class TestClient {

    private index;

    constructor(index) {
        this.index = index;
    }

     async getWithAuthentication<D>(url: string): Promise<D[]> {
        const response = await request(this.index)
            .get(url)
            .set('Authorization', `Basic ${Buffer.from(testUserString()).toString('base64')}`)
            .expect(HttpStatusCode.OK)

        return response.body as D[];
    }

     async postWithAuthentication<D>(url: string, object: Object): Promise<D> {
        const response = await request(this.index)
            .post(url)
            .send(object)
            .set('Authorization', `Basic ${Buffer.from(testUserString()).toString('base64')}`)
            .expect(HttpStatusCode.OK)

        return response.body as D;
    }

     async post<D>(url: string, object: Object): Promise<D> {
        const response = await request(this.index)
            .post(url)
            .send(object)
            .expect(HttpStatusCode.OK)

        return response.body as D;
    }

     async putWithAuthentication<D>(url: string, object: Object): Promise<D> {
        const response = await request(this.index)
            .put(url)
            .send(object)
            .set('Authorization', `Basic ${Buffer.from(testUserString()).toString('base64')}`)
            .expect(HttpStatusCode.OK)

        return response.body as D;
    }

     async deleteWithAuthentication<D>(url: string): Promise<any> {
        return await request(this.index)
            .delete(url)
            .set('Authorization', `Basic ${Buffer.from(testUserString()).toString('base64')}`)
            .expect(HttpStatusCode.OK)
    }
}
