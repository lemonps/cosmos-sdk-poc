/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'lemonsuy.lemon.lemon'

export interface Block {
  creator: string
  id: number
  blockNumber: number
  blockHash: string
  blockHeader: string
  blockData: string
}

const baseBlock: object = { creator: '', id: 0, blockNumber: 0, blockHash: '', blockHeader: '', blockData: '' }

export const Block = {
  encode(message: Block, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.blockNumber !== 0) {
      writer.uint32(24).uint64(message.blockNumber)
    }
    if (message.blockHash !== '') {
      writer.uint32(34).string(message.blockHash)
    }
    if (message.blockHeader !== '') {
      writer.uint32(42).string(message.blockHeader)
    }
    if (message.blockData !== '') {
      writer.uint32(50).string(message.blockData)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBlock } as Block
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
          message.blockNumber = longToNumber(reader.uint64() as Long)
          break
        case 4:
          message.blockHash = reader.string()
          break
        case 5:
          message.blockHeader = reader.string()
          break
        case 6:
          message.blockData = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Block {
    const message = { ...baseBlock } as Block
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
    if (object.blockNumber !== undefined && object.blockNumber !== null) {
      message.blockNumber = Number(object.blockNumber)
    } else {
      message.blockNumber = 0
    }
    if (object.blockHash !== undefined && object.blockHash !== null) {
      message.blockHash = String(object.blockHash)
    } else {
      message.blockHash = ''
    }
    if (object.blockHeader !== undefined && object.blockHeader !== null) {
      message.blockHeader = String(object.blockHeader)
    } else {
      message.blockHeader = ''
    }
    if (object.blockData !== undefined && object.blockData !== null) {
      message.blockData = String(object.blockData)
    } else {
      message.blockData = ''
    }
    return message
  },

  toJSON(message: Block): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.blockNumber !== undefined && (obj.blockNumber = message.blockNumber)
    message.blockHash !== undefined && (obj.blockHash = message.blockHash)
    message.blockHeader !== undefined && (obj.blockHeader = message.blockHeader)
    message.blockData !== undefined && (obj.blockData = message.blockData)
    return obj
  },

  fromPartial(object: DeepPartial<Block>): Block {
    const message = { ...baseBlock } as Block
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
    if (object.blockNumber !== undefined && object.blockNumber !== null) {
      message.blockNumber = object.blockNumber
    } else {
      message.blockNumber = 0
    }
    if (object.blockHash !== undefined && object.blockHash !== null) {
      message.blockHash = object.blockHash
    } else {
      message.blockHash = ''
    }
    if (object.blockHeader !== undefined && object.blockHeader !== null) {
      message.blockHeader = object.blockHeader
    } else {
      message.blockHeader = ''
    }
    if (object.blockData !== undefined && object.blockData !== null) {
      message.blockData = object.blockData
    } else {
      message.blockData = ''
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
