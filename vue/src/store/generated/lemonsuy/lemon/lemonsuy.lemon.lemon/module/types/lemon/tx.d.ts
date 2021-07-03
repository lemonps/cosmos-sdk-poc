import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "lemonsuy.lemon.lemon";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateBlock {
    creator: string;
    blockNumber: number;
    blockHash: string;
    blockHeader: string;
    blockData: string;
}
export interface MsgCreateBlockResponse {
    id: number;
}
export interface MsgUpdateBlock {
    creator: string;
    id: number;
    blockNumber: number;
    blockHash: string;
    blockHeader: string;
    blockData: string;
}
export interface MsgUpdateBlockResponse {
}
export interface MsgDeleteBlock {
    creator: string;
    id: number;
}
export interface MsgDeleteBlockResponse {
}
export interface MsgCreateTransaction {
    creator: string;
    txhash: string;
    nonce: string;
}
export interface MsgCreateTransactionResponse {
    id: number;
}
export interface MsgUpdateTransaction {
    creator: string;
    id: number;
    txhash: string;
    nonce: string;
}
export interface MsgUpdateTransactionResponse {
}
export interface MsgDeleteTransaction {
    creator: string;
    id: number;
}
export interface MsgDeleteTransactionResponse {
}
export declare const MsgCreateBlock: {
    encode(message: MsgCreateBlock, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBlock;
    fromJSON(object: any): MsgCreateBlock;
    toJSON(message: MsgCreateBlock): unknown;
    fromPartial(object: DeepPartial<MsgCreateBlock>): MsgCreateBlock;
};
export declare const MsgCreateBlockResponse: {
    encode(message: MsgCreateBlockResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBlockResponse;
    fromJSON(object: any): MsgCreateBlockResponse;
    toJSON(message: MsgCreateBlockResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateBlockResponse>): MsgCreateBlockResponse;
};
export declare const MsgUpdateBlock: {
    encode(message: MsgUpdateBlock, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBlock;
    fromJSON(object: any): MsgUpdateBlock;
    toJSON(message: MsgUpdateBlock): unknown;
    fromPartial(object: DeepPartial<MsgUpdateBlock>): MsgUpdateBlock;
};
export declare const MsgUpdateBlockResponse: {
    encode(_: MsgUpdateBlockResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBlockResponse;
    fromJSON(_: any): MsgUpdateBlockResponse;
    toJSON(_: MsgUpdateBlockResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateBlockResponse>): MsgUpdateBlockResponse;
};
export declare const MsgDeleteBlock: {
    encode(message: MsgDeleteBlock, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBlock;
    fromJSON(object: any): MsgDeleteBlock;
    toJSON(message: MsgDeleteBlock): unknown;
    fromPartial(object: DeepPartial<MsgDeleteBlock>): MsgDeleteBlock;
};
export declare const MsgDeleteBlockResponse: {
    encode(_: MsgDeleteBlockResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBlockResponse;
    fromJSON(_: any): MsgDeleteBlockResponse;
    toJSON(_: MsgDeleteBlockResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteBlockResponse>): MsgDeleteBlockResponse;
};
export declare const MsgCreateTransaction: {
    encode(message: MsgCreateTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTransaction;
    fromJSON(object: any): MsgCreateTransaction;
    toJSON(message: MsgCreateTransaction): unknown;
    fromPartial(object: DeepPartial<MsgCreateTransaction>): MsgCreateTransaction;
};
export declare const MsgCreateTransactionResponse: {
    encode(message: MsgCreateTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTransactionResponse;
    fromJSON(object: any): MsgCreateTransactionResponse;
    toJSON(message: MsgCreateTransactionResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateTransactionResponse>): MsgCreateTransactionResponse;
};
export declare const MsgUpdateTransaction: {
    encode(message: MsgUpdateTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTransaction;
    fromJSON(object: any): MsgUpdateTransaction;
    toJSON(message: MsgUpdateTransaction): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTransaction>): MsgUpdateTransaction;
};
export declare const MsgUpdateTransactionResponse: {
    encode(_: MsgUpdateTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTransactionResponse;
    fromJSON(_: any): MsgUpdateTransactionResponse;
    toJSON(_: MsgUpdateTransactionResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateTransactionResponse>): MsgUpdateTransactionResponse;
};
export declare const MsgDeleteTransaction: {
    encode(message: MsgDeleteTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTransaction;
    fromJSON(object: any): MsgDeleteTransaction;
    toJSON(message: MsgDeleteTransaction): unknown;
    fromPartial(object: DeepPartial<MsgDeleteTransaction>): MsgDeleteTransaction;
};
export declare const MsgDeleteTransactionResponse: {
    encode(_: MsgDeleteTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTransactionResponse;
    fromJSON(_: any): MsgDeleteTransactionResponse;
    toJSON(_: MsgDeleteTransactionResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteTransactionResponse>): MsgDeleteTransactionResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateBlock(request: MsgCreateBlock): Promise<MsgCreateBlockResponse>;
    UpdateBlock(request: MsgUpdateBlock): Promise<MsgUpdateBlockResponse>;
    DeleteBlock(request: MsgDeleteBlock): Promise<MsgDeleteBlockResponse>;
    CreateTransaction(request: MsgCreateTransaction): Promise<MsgCreateTransactionResponse>;
    UpdateTransaction(request: MsgUpdateTransaction): Promise<MsgUpdateTransactionResponse>;
    DeleteTransaction(request: MsgDeleteTransaction): Promise<MsgDeleteTransactionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateBlock(request: MsgCreateBlock): Promise<MsgCreateBlockResponse>;
    UpdateBlock(request: MsgUpdateBlock): Promise<MsgUpdateBlockResponse>;
    DeleteBlock(request: MsgDeleteBlock): Promise<MsgDeleteBlockResponse>;
    CreateTransaction(request: MsgCreateTransaction): Promise<MsgCreateTransactionResponse>;
    UpdateTransaction(request: MsgUpdateTransaction): Promise<MsgUpdateTransactionResponse>;
    DeleteTransaction(request: MsgDeleteTransaction): Promise<MsgDeleteTransactionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
