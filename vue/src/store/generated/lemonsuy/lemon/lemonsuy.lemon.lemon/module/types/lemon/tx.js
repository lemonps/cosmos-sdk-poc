/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'lemonsuy.lemon.lemon';
const baseMsgCreateBlock = { creator: '', blockNumber: 0, blockHash: '', blockHeader: '', blockData: '' };
export const MsgCreateBlock = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.blockNumber !== 0) {
            writer.uint32(16).uint64(message.blockNumber);
        }
        if (message.blockHash !== '') {
            writer.uint32(26).string(message.blockHash);
        }
        if (message.blockHeader !== '') {
            writer.uint32(34).string(message.blockHeader);
        }
        if (message.blockData !== '') {
            writer.uint32(42).string(message.blockData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateBlock };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.blockNumber = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.blockHash = reader.string();
                    break;
                case 4:
                    message.blockHeader = reader.string();
                    break;
                case 5:
                    message.blockData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateBlock };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.blockNumber !== undefined && object.blockNumber !== null) {
            message.blockNumber = Number(object.blockNumber);
        }
        else {
            message.blockNumber = 0;
        }
        if (object.blockHash !== undefined && object.blockHash !== null) {
            message.blockHash = String(object.blockHash);
        }
        else {
            message.blockHash = '';
        }
        if (object.blockHeader !== undefined && object.blockHeader !== null) {
            message.blockHeader = String(object.blockHeader);
        }
        else {
            message.blockHeader = '';
        }
        if (object.blockData !== undefined && object.blockData !== null) {
            message.blockData = String(object.blockData);
        }
        else {
            message.blockData = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.blockNumber !== undefined && (obj.blockNumber = message.blockNumber);
        message.blockHash !== undefined && (obj.blockHash = message.blockHash);
        message.blockHeader !== undefined && (obj.blockHeader = message.blockHeader);
        message.blockData !== undefined && (obj.blockData = message.blockData);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateBlock };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.blockNumber !== undefined && object.blockNumber !== null) {
            message.blockNumber = object.blockNumber;
        }
        else {
            message.blockNumber = 0;
        }
        if (object.blockHash !== undefined && object.blockHash !== null) {
            message.blockHash = object.blockHash;
        }
        else {
            message.blockHash = '';
        }
        if (object.blockHeader !== undefined && object.blockHeader !== null) {
            message.blockHeader = object.blockHeader;
        }
        else {
            message.blockHeader = '';
        }
        if (object.blockData !== undefined && object.blockData !== null) {
            message.blockData = object.blockData;
        }
        else {
            message.blockData = '';
        }
        return message;
    }
};
const baseMsgCreateBlockResponse = { id: 0 };
export const MsgCreateBlockResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateBlockResponse };
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
        const message = { ...baseMsgCreateBlockResponse };
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
        const message = { ...baseMsgCreateBlockResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateBlock = { creator: '', id: 0, blockNumber: 0, blockHash: '', blockHeader: '', blockData: '' };
export const MsgUpdateBlock = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.blockNumber !== 0) {
            writer.uint32(24).uint64(message.blockNumber);
        }
        if (message.blockHash !== '') {
            writer.uint32(34).string(message.blockHash);
        }
        if (message.blockHeader !== '') {
            writer.uint32(42).string(message.blockHeader);
        }
        if (message.blockData !== '') {
            writer.uint32(50).string(message.blockData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateBlock };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.blockNumber = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.blockHash = reader.string();
                    break;
                case 5:
                    message.blockHeader = reader.string();
                    break;
                case 6:
                    message.blockData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateBlock };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.blockNumber !== undefined && object.blockNumber !== null) {
            message.blockNumber = Number(object.blockNumber);
        }
        else {
            message.blockNumber = 0;
        }
        if (object.blockHash !== undefined && object.blockHash !== null) {
            message.blockHash = String(object.blockHash);
        }
        else {
            message.blockHash = '';
        }
        if (object.blockHeader !== undefined && object.blockHeader !== null) {
            message.blockHeader = String(object.blockHeader);
        }
        else {
            message.blockHeader = '';
        }
        if (object.blockData !== undefined && object.blockData !== null) {
            message.blockData = String(object.blockData);
        }
        else {
            message.blockData = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.blockNumber !== undefined && (obj.blockNumber = message.blockNumber);
        message.blockHash !== undefined && (obj.blockHash = message.blockHash);
        message.blockHeader !== undefined && (obj.blockHeader = message.blockHeader);
        message.blockData !== undefined && (obj.blockData = message.blockData);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateBlock };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.blockNumber !== undefined && object.blockNumber !== null) {
            message.blockNumber = object.blockNumber;
        }
        else {
            message.blockNumber = 0;
        }
        if (object.blockHash !== undefined && object.blockHash !== null) {
            message.blockHash = object.blockHash;
        }
        else {
            message.blockHash = '';
        }
        if (object.blockHeader !== undefined && object.blockHeader !== null) {
            message.blockHeader = object.blockHeader;
        }
        else {
            message.blockHeader = '';
        }
        if (object.blockData !== undefined && object.blockData !== null) {
            message.blockData = object.blockData;
        }
        else {
            message.blockData = '';
        }
        return message;
    }
};
const baseMsgUpdateBlockResponse = {};
export const MsgUpdateBlockResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateBlockResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateBlockResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateBlockResponse };
        return message;
    }
};
const baseMsgDeleteBlock = { creator: '', id: 0 };
export const MsgDeleteBlock = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteBlock };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteBlock };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteBlock };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteBlockResponse = {};
export const MsgDeleteBlockResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteBlockResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteBlockResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteBlockResponse };
        return message;
    }
};
const baseMsgCreateTransaction = { creator: '', txhash: '', nonce: '' };
export const MsgCreateTransaction = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.txhash !== '') {
            writer.uint32(18).string(message.txhash);
        }
        if (message.nonce !== '') {
            writer.uint32(26).string(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTransaction };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.txhash = reader.string();
                    break;
                case 3:
                    message.nonce = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.txhash !== undefined && object.txhash !== null) {
            message.txhash = String(object.txhash);
        }
        else {
            message.txhash = '';
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = String(object.nonce);
        }
        else {
            message.nonce = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.txhash !== undefined && (obj.txhash = message.txhash);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.txhash !== undefined && object.txhash !== null) {
            message.txhash = object.txhash;
        }
        else {
            message.txhash = '';
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = '';
        }
        return message;
    }
};
const baseMsgCreateTransactionResponse = { id: 0 };
export const MsgCreateTransactionResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTransactionResponse };
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
        const message = { ...baseMsgCreateTransactionResponse };
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
        const message = { ...baseMsgCreateTransactionResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateTransaction = { creator: '', id: 0, txhash: '', nonce: '' };
export const MsgUpdateTransaction = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.txhash !== '') {
            writer.uint32(26).string(message.txhash);
        }
        if (message.nonce !== '') {
            writer.uint32(34).string(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTransaction };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.txhash = reader.string();
                    break;
                case 4:
                    message.nonce = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.txhash !== undefined && object.txhash !== null) {
            message.txhash = String(object.txhash);
        }
        else {
            message.txhash = '';
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = String(object.nonce);
        }
        else {
            message.nonce = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.txhash !== undefined && (obj.txhash = message.txhash);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.txhash !== undefined && object.txhash !== null) {
            message.txhash = object.txhash;
        }
        else {
            message.txhash = '';
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = '';
        }
        return message;
    }
};
const baseMsgUpdateTransactionResponse = {};
export const MsgUpdateTransactionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTransactionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateTransactionResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateTransactionResponse };
        return message;
    }
};
const baseMsgDeleteTransaction = { creator: '', id: 0 };
export const MsgDeleteTransaction = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteTransaction };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteTransactionResponse = {};
export const MsgDeleteTransactionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteTransactionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteTransactionResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteTransactionResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateBlock(request) {
        const data = MsgCreateBlock.encode(request).finish();
        const promise = this.rpc.request('lemonsuy.lemon.lemon.Msg', 'CreateBlock', data);
        return promise.then((data) => MsgCreateBlockResponse.decode(new Reader(data)));
    }
    UpdateBlock(request) {
        const data = MsgUpdateBlock.encode(request).finish();
        const promise = this.rpc.request('lemonsuy.lemon.lemon.Msg', 'UpdateBlock', data);
        return promise.then((data) => MsgUpdateBlockResponse.decode(new Reader(data)));
    }
    DeleteBlock(request) {
        const data = MsgDeleteBlock.encode(request).finish();
        const promise = this.rpc.request('lemonsuy.lemon.lemon.Msg', 'DeleteBlock', data);
        return promise.then((data) => MsgDeleteBlockResponse.decode(new Reader(data)));
    }
    CreateTransaction(request) {
        const data = MsgCreateTransaction.encode(request).finish();
        const promise = this.rpc.request('lemonsuy.lemon.lemon.Msg', 'CreateTransaction', data);
        return promise.then((data) => MsgCreateTransactionResponse.decode(new Reader(data)));
    }
    UpdateTransaction(request) {
        const data = MsgUpdateTransaction.encode(request).finish();
        const promise = this.rpc.request('lemonsuy.lemon.lemon.Msg', 'UpdateTransaction', data);
        return promise.then((data) => MsgUpdateTransactionResponse.decode(new Reader(data)));
    }
    DeleteTransaction(request) {
        const data = MsgDeleteTransaction.encode(request).finish();
        const promise = this.rpc.request('lemonsuy.lemon.lemon.Msg', 'DeleteTransaction', data);
        return promise.then((data) => MsgDeleteTransactionResponse.decode(new Reader(data)));
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
