/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'lemonsuy.lemon.lemon'

export interface Transaction {
  creator: string
  id: number
  txhash: string
  nonce: string
}

const baseTransaction: object = { creator: '', id: 0, txhash: '', nonce: '' }

export const Transaction = {
  encode(message: Transaction, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.txhash !== '') {
      writer.uint32(26).string(message.txhash)
    }
    if (message.nonce !== '') {
      writer.uint32(34).string(message.nonce)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseTransaction } as Transaction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.txhash = reader.string()
          break
        case 4:
          message.nonce = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Transaction {
    const message = { ...baseTransaction } as Transaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.txhash !== undefined && object.txhash !== null) {
      message.txhash = String(object.txhash)
    } else {
      message.txhash = ''
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = String(object.nonce)
    } else {
      message.nonce = ''
    }
    return message
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.txhash !== undefined && (obj.txhash = message.txhash)
    message.nonce !== undefined && (obj.nonce = message.nonce)
    return obj
  },

  fromPartial(object: DeepPartial<Transaction>): Transaction {
    const message = { ...baseTransaction } as Transaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.txhash !== undefined && object.txhash !== null) {
      message.txhash = object.txhash
    } else {
      message.txhash = ''
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce
    } else {
      message.nonce = ''
    }
    return message
  }
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
