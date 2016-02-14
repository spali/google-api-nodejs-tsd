import {Request, RequestCallback} from 'request';

export interface Oauth2 {
    new(options: any): Oauth2;

    getCertForOpenIdConnect: (params: any, callback: RequestCallback) => Request;
    getCertForOpenIdConnectRaw: (params: any, callback: RequestCallback) => Request;
    getRobotJwk: (params: any, callback: RequestCallback) => Request;
    getRobotMetadataRaw: (params: any, callback: RequestCallback) => Request;
    getRobotMetadataX509: (params: any, callback: RequestCallback) => Request;
    tokeninfo: (params: any, callback: RequestCallback) => Request;    userinfo: {
        get: (params: any, callback: RequestCallback) => Request;
        v2: {
            me: {
                get: (params: any, callback: RequestCallback) => Request;
            };
        };
    };
}