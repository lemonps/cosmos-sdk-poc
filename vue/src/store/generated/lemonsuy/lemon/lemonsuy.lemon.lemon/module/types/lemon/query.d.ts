import { Reader, Writer } from 'protobufjs/minimal';
import { Block } from '../lemon/block';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Transaction } from '../lemon/transaction';
export declare const protobufPackage = "lemonsuy.lemon.lemon";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetBlockRequest {
    id: number;
}
export interface QueryGetBlockResponse {
    Block: Block | undefined;
}
export interface QueryAllBlockRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBlockResponse {
    Block: Block[];
    pagination: PageResponse | undefined;
}
export interface QueryGetTransactionRequest {
    id: number;
}
export interface QueryGetTransactionResponse {
    Transaction: Transaction | undefined;
}
export interface QueryAllTransactionRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTransactionResponse {
    Transaction: Transaction[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetBlockRequest: {
    encode(message: QueryGetBlockRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBlockRequest;
    fromJSON(object: any): QueryGetBlockRequest;
    toJSON(message: QueryGetBlockRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBlockRequest>): QueryGetBlockRequest;
};
export declare const QueryGetBlockResponse: {
    encode(message: QueryGetBlockResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBlockResponse;
    fromJSON(object: any): QueryGetBlockResponse;
    toJSON(message: QueryGetBlockResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBlockResponse>): QueryGetBlockResponse;
};
export declare const QueryAllBlockRequest: {
    encode(message: QueryAllBlockRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBlockRequest;
    fromJSON(object: any): QueryAllBlockRequest;
    toJSON(message: QueryAllBlockRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBlockRequest>): QueryAllBlockRequest;
};
export declare const QueryAllBlockResponse: {
    encode(message: QueryAllBlockResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBlockResponse;
    fromJSON(object: any): QueryAllBlockResponse;
    toJSON(message: QueryAllBlockResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBlockResponse>): QueryAllBlockResponse;
};
export declare const QueryGetTransactionRequest: {
    encode(message: QueryGetTransactionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTransactionRequest;
    fromJSON(object: any): QueryGetTransactionRequest;
    toJSON(message: QueryGetTransactionRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTransactionRequest>): QueryGetTransactionRequest;
};
export declare const QueryGetTransactionResponse: {
    encode(message: QueryGetTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTransactionResponse;
    fromJSON(object: any): QueryGetTransactionResponse;
    toJSON(message: QueryGetTransactionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTransactionResponse>): QueryGetTransactionResponse;
};
export declare const QueryAllTransactionRequest: {
    encode(message: QueryAllTransactionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTransactionRequest;
    fromJSON(object: any): QueryAllTransactionRequest;
    toJSON(message: QueryAllTransactionRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTransactionRequest>): QueryAllTransactionRequest;
};
export declare const QueryAllTransactionResponse: {
    encode(message: QueryAllTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTransactionResponse;
    fromJSON(object: any): QueryAllTransactionResponse;
    toJSON(message: QueryAllTransactionResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTransactionResponse>): QueryAllTransactionResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a block by id. */
    Block(request: QueryGetBlockRequest): Promise<QueryGetBlockResponse>;
    /** Queries a list of block items. */
    BlockAll(request: QueryAllBlockRequest): Promise<QueryAllBlockResponse>;
    /** Queries a transaction by id. */
    Transaction(request: QueryGetTransactionRequest): Promise<QueryGetTransactionResponse>;
    /** Queries a list of transaction items. */
    TransactionAll(request: QueryAllTransactionRequest): Promise<QueryAllTransactionResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Block(request: QueryGetBlockRequest): Promise<QueryGetBlockResponse>;
    BlockAll(request: QueryAllBlockRequest): Promise<QueryAllBlockResponse>;
    Transaction(request: QueryGetTransactionRequest): Promise<QueryGetTransactionResponse>;
    TransactionAll(request: QueryAllTransactionRequest): Promise<QueryAllTransactionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
