import * as Context from '@dra2020/context';
import * as Storage from '@dra2020/storage';
import * as FSM from '@dra2020/fsm';
import * as LogAbstract from '@dra2020/logabstract';
export interface Environment {
    context: Context.IContext;
    log: LogAbstract.ILog;
    fsmManager: FSM.FsmManager;
    storageManager: Storage.StorageManager;
}
export declare class StorageManager extends Storage.StorageManager {
    nStartPending: number;
    totalOps: number;
    outstandingOps: number;
    constructor(env: Environment, bucketMap?: Storage.BucketMap);
    get env(): Environment;
    initDir(dir: string): void;
    onInitDir(err: any): void;
    load(blob: Storage.StorageBlob): void;
    save(blob: Storage.StorageBlob): void;
    del(blob: Storage.StorageBlob): void;
    createTransferUrl(params: Storage.TransferParams): Storage.FsmTransferUrl;
}
