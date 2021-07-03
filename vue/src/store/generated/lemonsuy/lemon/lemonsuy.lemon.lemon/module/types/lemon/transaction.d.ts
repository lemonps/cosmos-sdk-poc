import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "lemonsuy.lemon.lemon";
export interface Transaction {
    creator: string;
    id: number;
    txhash: string;
    nonce: string;
}
export declare const Transaction: {
    encode(message: Transaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Transaction;
    fromJSON(object: any): Transaction;
    toJSON(message: Transaction): unknown;
    fromPartial(object: DeepPartial<Transaction>): Transaction;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
