import {agent as request} from "supertest";
import {testUserString} from './test-users';
import {HttpStatusCode} from '../../../dist/infrastructure/error/http-status-code';

export default abstract class TestClient {

    private app;

    constructor(app) {
        this.app = app;
    }

    protected async getWithAuthentication<D>(url: string): Promise<D[]> {
        const response = await request(this.app)
            .get(url)
            .set('Authorization', `Basic ${Buffer.from(testUserString()).toString('base64')}`)
            .expect(HttpStatusCode.OK)

        return response.body as D[];
    }

    protected async postWithAuthentication<D>(url: string, object: any): Promise<D> {
        const response = await request(this.app)
            .post(url)
            .send(object)
            .set('Authorization', `Basic ${Buffer.from(testUserString()).toString('base64')}`)
            .expect(HttpStatusCode.OK)

        return response.body as D;
    }

    protected async post<D>(url: string, object: any): Promise<D> {
        const response = await request(this.app)
            .post(url)
            .send(object)
        // .expect(HttpStatusCode.OK)

        return response.body as D;
    }

    protected async putWithAuthentication<D>(url: string, object: any): Promise<D> {
        const response = await request(this.app)
            .put(url)
            .send(object)
            .set('Authorization', `Basic ${Buffer.from(testUserString()).toString('base64')}`)
            .expect(HttpStatusCode.OK)

        return response.body as D;
    }

    protected async deleteWithAuthentication(url: string): Promise<any> {
        return await request(this.app)
            .delete(url)
            .set('Authorization', `Basic ${Buffer.from(testUserString()).toString('base64')}`)
            .expect(HttpStatusCode.OK)
    }
}
