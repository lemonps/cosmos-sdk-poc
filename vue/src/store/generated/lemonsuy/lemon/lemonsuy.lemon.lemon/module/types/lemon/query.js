/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Block } from '../lemon/block';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Transaction } from '../lemon/transaction';
export const protobufPackage = 'lemonsuy.lemon.lemon';
const baseQueryGetBlockRequest = { id: 0 };
export const QueryGetBlockRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBlockRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBlockRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBlockRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetBlockResponse = {};
export const QueryGetBlockResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Block !== undefined) {
            Block.encode(message.Block, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBlockResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Block = Block.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBlockResponse };
        if (object.Block !== undefined && object.Block !== null) {
            message.Block = Block.fromJSON(object.Block);
        }
        else {
            message.Block = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Block !== undefined && (obj.Block = message.Block ? Block.toJSON(message.Block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBlockResponse };
        if (object.Block !== undefined && object.Block !== null) {
            message.Block = Block.fromPartial(object.Block);
        }
        else {
            message.Block = undefined;
        }
        return message;
    }
};
const baseQueryAllBlockRequest = {};
export const QueryAllBlockRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBlockRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBlockRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBlockRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllBlockResponse = {};
export const QueryAllBlockResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Block) {
            Block.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBlockResponse };
        message.Block = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Block.push(Block.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBlockResponse };
        message.Block = [];
        if (object.Block !== undefined && object.Block !== null) {
            for (const e of object.Block) {
                message.Block.push(Block.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Block) {
            obj.Block = message.Block.map((e) => (e ? Block.toJSON(e) : undefined));
        }
        else {
            obj.Block = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBlockResponse };
        message.Block = [];
        if (object.Block !== undefined && object.Block !== null) {
            for (const e of object.Block) {
                message.Block.push(Block.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetTransactionRequest = { id: 0 };
export const QueryGetTransactionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetTransactionRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetTransactionRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetTransactionRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetTransactionResponse = {};
export const QueryGetTransactionResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Transaction !== undefined) {
            Transaction.encode(message.Transaction, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetTransactionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Transaction = Transaction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetTransactionResponse };
        if (object.Transaction !== undefined && object.Transaction !== null) {
            message.Transaction = Transaction.fromJSON(object.Transaction);
        }
        else {
            message.Transaction = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Transaction !== undefined && (obj.Transaction = message.Transaction ? Transaction.toJSON(message.Transaction) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetTransactionResponse };
        if (object.Transaction !== undefined && object.Transaction !== null) {
            message.Transaction = Transaction.fromPartial(object.Transaction);
        }
        else {
            message.Transaction = undefined;
        }
        return message;
    }
};
const baseQueryAllTransactionRequest = {};
export const QueryAllTransactionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllTransactionRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllTransactionRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllTransactionRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllTransactionResponse = {};
export const QueryAllTransactionResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Transaction) {
            Transaction.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllTransactionResponse };
        message.Transaction = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Transaction.push(Transaction.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllTransactionResponse };
        message.Transaction = [];
        if (object.Transaction !== undefined && object.Transaction !== null) {
            for (const e of object.Transaction) {
                message.Transaction.push(Transaction.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Transaction) {
            obj.Transaction = message.Transaction.map((e) => (e ? Transaction.toJSON(e) : undefined));
        }
        else {
            obj.Transaction = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllTransactionResponse };
        message.Transaction = [];
        if (object.Transaction !== undefined && object.Transaction !== null) {
            for (const e of object.Transaction) {
                message.Transaction.push(Transaction.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Block(request) {
        const data = QueryGetBlockRequest.encode(request).finish();
        const promise = this.rpc.request('lemonsuy.lemon.lemon.Query', 'Block', data);
        return promise.then((data) => QueryGetBlockResponse.decode(new Reader(data)));
    }
    BlockAll(request) {
        const data = QueryAllBlockRequest.encode(request).finish();
        const promise = this.rpc.request('lemonsuy.lemon.lemon.Query', 'BlockAll', data);
        return promise.then((data) => QueryAllBlockResponse.decode(new Reader(data)));
    }
    Transaction(request) {
        const data = QueryGetTransactionRequest.encode(request).finish();
        const promise = this.rpc.request('lemonsuy.lemon.lemon.Query', 'Transaction', data);
        return promise.then((data) => QueryGetTransactionResponse.decode(new Reader(data)));
    }
    TransactionAll(request) {
        const data = QueryAllTransactionRequest.encode(request).finish();
        const promise = this.rpc.request('lemonsuy.lemon.lemon.Query', 'TransactionAll', data);
        return promise.then((data) => QueryAllTransactionResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
