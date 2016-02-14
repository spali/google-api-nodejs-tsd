import {Request, RequestCallback} from 'request';

export interface Taskqueue {
    new(options: any): Taskqueue;

    taskqueues: {
        get: (params: any, callback: RequestCallback) => Request;
    };
    tasks: {
        delete: (params: any, callback: RequestCallback) => Request;
        get: (params: any, callback: RequestCallback) => Request;
        insert: (params: any, callback: RequestCallback) => Request;
        lease: (params: any, callback: RequestCallback) => Request;
        list: (params: any, callback: RequestCallback) => Request;
        patch: (params: any, callback: RequestCallback) => Request;
        update: (params: any, callback: RequestCallback) => Request;
    };
}