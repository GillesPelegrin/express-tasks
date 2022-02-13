import index from '../../../src';
import {agent as request} from "supertest";
import {testUserString} from './test-users';
import {HttpStatusCode} from '../../../dist/infrastructure/error/http-status-code';

export default abstract class TestClient {

    static async getWithAuthentication<D>(url: string): Promise<D[]> {
        const response = await request(index)
            .get(url)
            .set('Authorization', `Basic ${Buffer.from(testUserString()).toString('base64')}`)
            .expect(HttpStatusCode.OK)

        return response.body as D[];
    }

    static async postWithAuthentication<D>(url: string, object: Object): Promise<D> {
        const response = await request(index)
            .post(url)
            .send(object)
            .set('Authorization', `Basic ${Buffer.from(testUserString()).toString('base64')}`)
            .expect(HttpStatusCode.OK)

        return response.body as D;
    }

    static async post<D>(url: string, object: Object): Promise<D> {
        const response = await request(index)
            .post(url)
            .send(object)
            .expect(HttpStatusCode.OK)

        return response.body as D;
    }

    static async putWithAuthentication<D>(url: string, object: Object): Promise<D> {
        const response = await request(index)
            .put(url)
            .send(object)
            .set('Authorization', `Basic ${Buffer.from(testUserString()).toString('base64')}`)
            .expect(HttpStatusCode.OK)

        return response.body as D;
    }

    static async deleteWithAuthentication<D>(url: string): Promise<any> {
        return await request(index)
            .delete(url)
            .set('Authorization', `Basic ${Buffer.from(testUserString()).toString('base64')}`)
            .expect(HttpStatusCode.OK)
    }
}
