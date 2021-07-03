/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Block } from '../lemon/block'
import { Transaction } from '../lemon/transaction'

export const protobufPackage = 'lemonsuy.lemon.lemon'

/** GenesisState defines the lemon module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  blockList: Block[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  blockCount: number
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  transactionList: Transaction[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  transactionCount: number
}

const baseGenesisState: object = { blockCount: 0, transactionCount: 0 }

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.blockList) {
      Block.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    if (message.blockCount !== 0) {
      writer.uint32(32).uint64(message.blockCount)
    }
    for (const v of message.transactionList) {
      Transaction.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.transactionCount !== 0) {
      writer.uint32(16).uint64(message.transactionCount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.blockList = []
    message.transactionList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 3:
          message.blockList.push(Block.decode(reader, reader.uint32()))
          break
        case 4:
          message.blockCount = longToNumber(reader.uint64() as Long)
          break
        case 1:
          message.transactionList.push(Transaction.decode(reader, reader.uint32()))
          break
        case 2:
          message.transactionCount = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.blockList = []
    message.transactionList = []
    if (object.blockList !== undefined && object.blockList !== null) {
      for (const e of object.blockList) {
        message.blockList.push(Block.fromJSON(e))
      }
    }
    if (object.blockCount !== undefined && object.blockCount !== null) {
      message.blockCount = Number(object.blockCount)
    } else {
      message.blockCount = 0
    }
    if (object.transactionList !== undefined && object.transactionList !== null) {
      for (const e of object.transactionList) {
        message.transactionList.push(Transaction.fromJSON(e))
      }
    }
    if (object.transactionCount !== undefined && object.transactionCount !== null) {
      message.transactionCount = Number(object.transactionCount)
    } else {
      message.transactionCount = 0
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.blockList) {
      obj.blockList = message.blockList.map((e) => (e ? Block.toJSON(e) : undefined))
    } else {
      obj.blockList = []
    }
    message.blockCount !== undefined && (obj.blockCount = message.blockCount)
    if (message.transactionList) {
      obj.transactionList = message.transactionList.map((e) => (e ? Transaction.toJSON(e) : undefined))
    } else {
      obj.transactionList = []
    }
    message.transactionCount !== undefined && (obj.transactionCount = message.transactionCount)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.blockList = []
    message.transactionList = []
    if (object.blockList !== undefined && object.blockList !== null) {
      for (const e of object.blockList) {
        message.blockList.push(Block.fromPartial(e))
      }
    }
    if (object.blockCount !== undefined && object.blockCount !== null) {
      message.blockCount = object.blockCount
    } else {
      message.blockCount = 0
    }
    if (object.transactionList !== undefined && object.transactionList !== null) {
      for (const e of object.transactionList) {
        message.transactionList.push(Transaction.fromPartial(e))
      }
    }
    if (object.transactionCount !== undefined && object.transactionCount !== null) {
      message.transactionCount = object.transactionCount
    } else {
      message.transactionCount = 0
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
