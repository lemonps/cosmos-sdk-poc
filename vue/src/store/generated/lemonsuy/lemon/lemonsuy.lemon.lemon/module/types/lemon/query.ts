/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Block } from '../lemon/block'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Transaction } from '../lemon/transaction'

export const protobufPackage = 'lemonsuy.lemon.lemon'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetBlockRequest {
  id: number
}

export interface QueryGetBlockResponse {
  Block: Block | undefined
}

export interface QueryAllBlockRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllBlockResponse {
  Block: Block[]
  pagination: PageResponse | undefined
}

export interface QueryGetTransactionRequest {
  id: number
}

export interface QueryGetTransactionResponse {
  Transaction: Transaction | undefined
}

export interface QueryAllTransactionRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllTransactionResponse {
  Transaction: Transaction[]
  pagination: PageResponse | undefined
}

const baseQueryGetBlockRequest: object = { id: 0 }

export const QueryGetBlockRequest = {
  encode(message: QueryGetBlockRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBlockRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBlockRequest } as QueryGetBlockRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBlockRequest {
    const message = { ...baseQueryGetBlockRequest } as QueryGetBlockRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetBlockRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBlockRequest>): QueryGetBlockRequest {
    const message = { ...baseQueryGetBlockRequest } as QueryGetBlockRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetBlockResponse: object = {}

export const QueryGetBlockResponse = {
  encode(message: QueryGetBlockResponse, writer: Writer = Writer.create()): Writer {
    if (message.Block !== undefined) {
      Block.encode(message.Block, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBlockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBlockResponse } as QueryGetBlockResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Block = Block.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBlockResponse {
    const message = { ...baseQueryGetBlockResponse } as QueryGetBlockResponse
    if (object.Block !== undefined && object.Block !== null) {
      message.Block = Block.fromJSON(object.Block)
    } else {
      message.Block = undefined
    }
    return message
  },

  toJSON(message: QueryGetBlockResponse): unknown {
    const obj: any = {}
    message.Block !== undefined && (obj.Block = message.Block ? Block.toJSON(message.Block) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBlockResponse>): QueryGetBlockResponse {
    const message = { ...baseQueryGetBlockResponse } as QueryGetBlockResponse
    if (object.Block !== undefined && object.Block !== null) {
      message.Block = Block.fromPartial(object.Block)
    } else {
      message.Block = undefined
    }
    return message
  }
}

const baseQueryAllBlockRequest: object = {}

export const QueryAllBlockRequest = {
  encode(message: QueryAllBlockRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBlockRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBlockRequest } as QueryAllBlockRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBlockRequest {
    const message = { ...baseQueryAllBlockRequest } as QueryAllBlockRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBlockRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBlockRequest>): QueryAllBlockRequest {
    const message = { ...baseQueryAllBlockRequest } as QueryAllBlockRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllBlockResponse: object = {}

export const QueryAllBlockResponse = {
  encode(message: QueryAllBlockResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Block) {
      Block.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBlockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBlockResponse } as QueryAllBlockResponse
    message.Block = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Block.push(Block.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBlockResponse {
    const message = { ...baseQueryAllBlockResponse } as QueryAllBlockResponse
    message.Block = []
    if (object.Block !== undefined && object.Block !== null) {
      for (const e of object.Block) {
        message.Block.push(Block.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBlockResponse): unknown {
    const obj: any = {}
    if (message.Block) {
      obj.Block = message.Block.map((e) => (e ? Block.toJSON(e) : undefined))
    } else {
      obj.Block = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBlockResponse>): QueryAllBlockResponse {
    const message = { ...baseQueryAllBlockResponse } as QueryAllBlockResponse
    message.Block = []
    if (object.Block !== undefined && object.Block !== null) {
      for (const e of object.Block) {
        message.Block.push(Block.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetTransactionRequest: object = { id: 0 }

export const QueryGetTransactionRequest = {
  encode(message: QueryGetTransactionRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTransactionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetTransactionRequest } as QueryGetTransactionRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetTransactionRequest {
    const message = { ...baseQueryGetTransactionRequest } as QueryGetTransactionRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetTransactionRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetTransactionRequest>): QueryGetTransactionRequest {
    const message = { ...baseQueryGetTransactionRequest } as QueryGetTransactionRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetTransactionResponse: object = {}

export const QueryGetTransactionResponse = {
  encode(message: QueryGetTransactionResponse, writer: Writer = Writer.create()): Writer {
    if (message.Transaction !== undefined) {
      Transaction.encode(message.Transaction, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetTransactionResponse } as QueryGetTransactionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Transaction = Transaction.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetTransactionResponse {
    const message = { ...baseQueryGetTransactionResponse } as QueryGetTransactionResponse
    if (object.Transaction !== undefined && object.Transaction !== null) {
      message.Transaction = Transaction.fromJSON(object.Transaction)
    } else {
      message.Transaction = undefined
    }
    return message
  },

  toJSON(message: QueryGetTransactionResponse): unknown {
    const obj: any = {}
    message.Transaction !== undefined && (obj.Transaction = message.Transaction ? Transaction.toJSON(message.Transaction) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetTransactionResponse>): QueryGetTransactionResponse {
    const message = { ...baseQueryGetTransactionResponse } as QueryGetTransactionResponse
    if (object.Transaction !== undefined && object.Transaction !== null) {
      message.Transaction = Transaction.fromPartial(object.Transaction)
    } else {
      message.Transaction = undefined
    }
    return message
  }
}

const baseQueryAllTransactionRequest: object = {}

export const QueryAllTransactionRequest = {
  encode(message: QueryAllTransactionRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTransactionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllTransactionRequest } as QueryAllTransactionRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllTransactionRequest {
    const message = { ...baseQueryAllTransactionRequest } as QueryAllTransactionRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllTransactionRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllTransactionRequest>): QueryAllTransactionRequest {
    const message = { ...baseQueryAllTransactionRequest } as QueryAllTransactionRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllTransactionResponse: object = {}

export const QueryAllTransactionResponse = {
  encode(message: QueryAllTransactionResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Transaction) {
      Transaction.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllTransactionResponse } as QueryAllTransactionResponse
    message.Transaction = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Transaction.push(Transaction.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllTransactionResponse {
    const message = { ...baseQueryAllTransactionResponse } as QueryAllTransactionResponse
    message.Transaction = []
    if (object.Transaction !== undefined && object.Transaction !== null) {
      for (const e of object.Transaction) {
        message.Transaction.push(Transaction.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllTransactionResponse): unknown {
    const obj: any = {}
    if (message.Transaction) {
      obj.Transaction = message.Transaction.map((e) => (e ? Transaction.toJSON(e) : undefined))
    } else {
      obj.Transaction = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllTransactionResponse>): QueryAllTransactionResponse {
    const message = { ...baseQueryAllTransactionResponse } as QueryAllTransactionResponse
    message.Transaction = []
    if (object.Transaction !== undefined && object.Transaction !== null) {
      for (const e of object.Transaction) {
        message.Transaction.push(Transaction.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a block by id. */
  Block(request: QueryGetBlockRequest): Promise<QueryGetBlockResponse>
  /** Queries a list of block items. */
  BlockAll(request: QueryAllBlockRequest): Promise<QueryAllBlockResponse>
  /** Queries a transaction by id. */
  Transaction(request: QueryGetTransactionRequest): Promise<QueryGetTransactionResponse>
  /** Queries a list of transaction items. */
  TransactionAll(request: QueryAllTransactionRequest): Promise<QueryAllTransactionResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Block(request: QueryGetBlockRequest): Promise<QueryGetBlockResponse> {
    const data = QueryGetBlockRequest.encode(request).finish()
    const promise = this.rpc.request('lemonsuy.lemon.lemon.Query', 'Block', data)
    return promise.then((data) => QueryGetBlockResponse.decode(new Reader(data)))
  }

  BlockAll(request: QueryAllBlockRequest): Promise<QueryAllBlockResponse> {
    const data = QueryAllBlockRequest.encode(request).finish()
    const promise = this.rpc.request('lemonsuy.lemon.lemon.Query', 'BlockAll', data)
    return promise.then((data) => QueryAllBlockResponse.decode(new Reader(data)))
  }

  Transaction(request: QueryGetTransactionRequest): Promise<QueryGetTransactionResponse> {
    const data = QueryGetTransactionRequest.encode(request).finish()
    const promise = this.rpc.request('lemonsuy.lemon.lemon.Query', 'Transaction', data)
    return promise.then((data) => QueryGetTransactionResponse.decode(new Reader(data)))
  }

  TransactionAll(request: QueryAllTransactionRequest): Promise<QueryAllTransactionResponse> {
    const data = QueryAllTransactionRequest.encode(request).finish()
    const promise = this.rpc.request('lemonsuy.lemon.lemon.Query', 'TransactionAll', data)
    return promise.then((data) => QueryAllTransactionResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
