/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'lemonsuy.lemon.lemon'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateBlock {
  creator: string
  blockNumber: number
  blockHash: string
  blockHeader: string
  blockData: string
}

export interface MsgCreateBlockResponse {
  id: number
}

export interface MsgUpdateBlock {
  creator: string
  id: number
  blockNumber: number
  blockHash: string
  blockHeader: string
  blockData: string
}

export interface MsgUpdateBlockResponse {}

export interface MsgDeleteBlock {
  creator: string
  id: number
}

export interface MsgDeleteBlockResponse {}

export interface MsgCreateTransaction {
  creator: string
  txhash: string
  nonce: string
}

export interface MsgCreateTransactionResponse {
  id: number
}

export interface MsgUpdateTransaction {
  creator: string
  id: number
  txhash: string
  nonce: string
}

export interface MsgUpdateTransactionResponse {}

export interface MsgDeleteTransaction {
  creator: string
  id: number
}

export interface MsgDeleteTransactionResponse {}

const baseMsgCreateBlock: object = { creator: '', blockNumber: 0, blockHash: '', blockHeader: '', blockData: '' }

export const MsgCreateBlock = {
  encode(message: MsgCreateBlock, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.blockNumber !== 0) {
      writer.uint32(16).uint64(message.blockNumber)
    }
    if (message.blockHash !== '') {
      writer.uint32(26).string(message.blockHash)
    }
    if (message.blockHeader !== '') {
      writer.uint32(34).string(message.blockHeader)
    }
    if (message.blockData !== '') {
      writer.uint32(42).string(message.blockData)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBlock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBlock } as MsgCreateBlock
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.blockNumber = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.blockHash = reader.string()
          break
        case 4:
          message.blockHeader = reader.string()
          break
        case 5:
          message.blockData = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateBlock {
    const message = { ...baseMsgCreateBlock } as MsgCreateBlock
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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

  toJSON(message: MsgCreateBlock): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.blockNumber !== undefined && (obj.blockNumber = message.blockNumber)
    message.blockHash !== undefined && (obj.blockHash = message.blockHash)
    message.blockHeader !== undefined && (obj.blockHeader = message.blockHeader)
    message.blockData !== undefined && (obj.blockData = message.blockData)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateBlock>): MsgCreateBlock {
    const message = { ...baseMsgCreateBlock } as MsgCreateBlock
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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

const baseMsgCreateBlockResponse: object = { id: 0 }

export const MsgCreateBlockResponse = {
  encode(message: MsgCreateBlockResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBlockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBlockResponse } as MsgCreateBlockResponse
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

  fromJSON(object: any): MsgCreateBlockResponse {
    const message = { ...baseMsgCreateBlockResponse } as MsgCreateBlockResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateBlockResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateBlockResponse>): MsgCreateBlockResponse {
    const message = { ...baseMsgCreateBlockResponse } as MsgCreateBlockResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateBlock: object = { creator: '', id: 0, blockNumber: 0, blockHash: '', blockHeader: '', blockData: '' }

export const MsgUpdateBlock = {
  encode(message: MsgUpdateBlock, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBlock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBlock } as MsgUpdateBlock
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

  fromJSON(object: any): MsgUpdateBlock {
    const message = { ...baseMsgUpdateBlock } as MsgUpdateBlock
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

  toJSON(message: MsgUpdateBlock): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.blockNumber !== undefined && (obj.blockNumber = message.blockNumber)
    message.blockHash !== undefined && (obj.blockHash = message.blockHash)
    message.blockHeader !== undefined && (obj.blockHeader = message.blockHeader)
    message.blockData !== undefined && (obj.blockData = message.blockData)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateBlock>): MsgUpdateBlock {
    const message = { ...baseMsgUpdateBlock } as MsgUpdateBlock
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

const baseMsgUpdateBlockResponse: object = {}

export const MsgUpdateBlockResponse = {
  encode(_: MsgUpdateBlockResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBlockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBlockResponse } as MsgUpdateBlockResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateBlockResponse {
    const message = { ...baseMsgUpdateBlockResponse } as MsgUpdateBlockResponse
    return message
  },

  toJSON(_: MsgUpdateBlockResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateBlockResponse>): MsgUpdateBlockResponse {
    const message = { ...baseMsgUpdateBlockResponse } as MsgUpdateBlockResponse
    return message
  }
}

const baseMsgDeleteBlock: object = { creator: '', id: 0 }

export const MsgDeleteBlock = {
  encode(message: MsgDeleteBlock, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBlock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteBlock } as MsgDeleteBlock
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteBlock {
    const message = { ...baseMsgDeleteBlock } as MsgDeleteBlock
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
    return message
  },

  toJSON(message: MsgDeleteBlock): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteBlock>): MsgDeleteBlock {
    const message = { ...baseMsgDeleteBlock } as MsgDeleteBlock
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
    return message
  }
}

const baseMsgDeleteBlockResponse: object = {}

export const MsgDeleteBlockResponse = {
  encode(_: MsgDeleteBlockResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBlockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteBlockResponse } as MsgDeleteBlockResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteBlockResponse {
    const message = { ...baseMsgDeleteBlockResponse } as MsgDeleteBlockResponse
    return message
  },

  toJSON(_: MsgDeleteBlockResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteBlockResponse>): MsgDeleteBlockResponse {
    const message = { ...baseMsgDeleteBlockResponse } as MsgDeleteBlockResponse
    return message
  }
}

const baseMsgCreateTransaction: object = { creator: '', txhash: '', nonce: '' }

export const MsgCreateTransaction = {
  encode(message: MsgCreateTransaction, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.txhash !== '') {
      writer.uint32(18).string(message.txhash)
    }
    if (message.nonce !== '') {
      writer.uint32(26).string(message.nonce)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateTransaction } as MsgCreateTransaction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.txhash = reader.string()
          break
        case 3:
          message.nonce = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateTransaction {
    const message = { ...baseMsgCreateTransaction } as MsgCreateTransaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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

  toJSON(message: MsgCreateTransaction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.txhash !== undefined && (obj.txhash = message.txhash)
    message.nonce !== undefined && (obj.nonce = message.nonce)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateTransaction>): MsgCreateTransaction {
    const message = { ...baseMsgCreateTransaction } as MsgCreateTransaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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

const baseMsgCreateTransactionResponse: object = { id: 0 }

export const MsgCreateTransactionResponse = {
  encode(message: MsgCreateTransactionResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateTransactionResponse } as MsgCreateTransactionResponse
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

  fromJSON(object: any): MsgCreateTransactionResponse {
    const message = { ...baseMsgCreateTransactionResponse } as MsgCreateTransactionResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateTransactionResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateTransactionResponse>): MsgCreateTransactionResponse {
    const message = { ...baseMsgCreateTransactionResponse } as MsgCreateTransactionResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateTransaction: object = { creator: '', id: 0, txhash: '', nonce: '' }

export const MsgUpdateTransaction = {
  encode(message: MsgUpdateTransaction, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateTransaction } as MsgUpdateTransaction
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

  fromJSON(object: any): MsgUpdateTransaction {
    const message = { ...baseMsgUpdateTransaction } as MsgUpdateTransaction
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

  toJSON(message: MsgUpdateTransaction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.txhash !== undefined && (obj.txhash = message.txhash)
    message.nonce !== undefined && (obj.nonce = message.nonce)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateTransaction>): MsgUpdateTransaction {
    const message = { ...baseMsgUpdateTransaction } as MsgUpdateTransaction
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

const baseMsgUpdateTransactionResponse: object = {}

export const MsgUpdateTransactionResponse = {
  encode(_: MsgUpdateTransactionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateTransactionResponse } as MsgUpdateTransactionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateTransactionResponse {
    const message = { ...baseMsgUpdateTransactionResponse } as MsgUpdateTransactionResponse
    return message
  },

  toJSON(_: MsgUpdateTransactionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateTransactionResponse>): MsgUpdateTransactionResponse {
    const message = { ...baseMsgUpdateTransactionResponse } as MsgUpdateTransactionResponse
    return message
  }
}

const baseMsgDeleteTransaction: object = { creator: '', id: 0 }

export const MsgDeleteTransaction = {
  encode(message: MsgDeleteTransaction, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteTransaction } as MsgDeleteTransaction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteTransaction {
    const message = { ...baseMsgDeleteTransaction } as MsgDeleteTransaction
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
    return message
  },

  toJSON(message: MsgDeleteTransaction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteTransaction>): MsgDeleteTransaction {
    const message = { ...baseMsgDeleteTransaction } as MsgDeleteTransaction
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
    return message
  }
}

const baseMsgDeleteTransactionResponse: object = {}

export const MsgDeleteTransactionResponse = {
  encode(_: MsgDeleteTransactionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteTransactionResponse } as MsgDeleteTransactionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteTransactionResponse {
    const message = { ...baseMsgDeleteTransactionResponse } as MsgDeleteTransactionResponse
    return message
  },

  toJSON(_: MsgDeleteTransactionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteTransactionResponse>): MsgDeleteTransactionResponse {
    const message = { ...baseMsgDeleteTransactionResponse } as MsgDeleteTransactionResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateBlock(request: MsgCreateBlock): Promise<MsgCreateBlockResponse>
  UpdateBlock(request: MsgUpdateBlock): Promise<MsgUpdateBlockResponse>
  DeleteBlock(request: MsgDeleteBlock): Promise<MsgDeleteBlockResponse>
  CreateTransaction(request: MsgCreateTransaction): Promise<MsgCreateTransactionResponse>
  UpdateTransaction(request: MsgUpdateTransaction): Promise<MsgUpdateTransactionResponse>
  DeleteTransaction(request: MsgDeleteTransaction): Promise<MsgDeleteTransactionResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateBlock(request: MsgCreateBlock): Promise<MsgCreateBlockResponse> {
    const data = MsgCreateBlock.encode(request).finish()
    const promise = this.rpc.request('lemonsuy.lemon.lemon.Msg', 'CreateBlock', data)
    return promise.then((data) => MsgCreateBlockResponse.decode(new Reader(data)))
  }

  UpdateBlock(request: MsgUpdateBlock): Promise<MsgUpdateBlockResponse> {
    const data = MsgUpdateBlock.encode(request).finish()
    const promise = this.rpc.request('lemonsuy.lemon.lemon.Msg', 'UpdateBlock', data)
    return promise.then((data) => MsgUpdateBlockResponse.decode(new Reader(data)))
  }

  DeleteBlock(request: MsgDeleteBlock): Promise<MsgDeleteBlockResponse> {
    const data = MsgDeleteBlock.encode(request).finish()
    const promise = this.rpc.request('lemonsuy.lemon.lemon.Msg', 'DeleteBlock', data)
    return promise.then((data) => MsgDeleteBlockResponse.decode(new Reader(data)))
  }

  CreateTransaction(request: MsgCreateTransaction): Promise<MsgCreateTransactionResponse> {
    const data = MsgCreateTransaction.encode(request).finish()
    const promise = this.rpc.request('lemonsuy.lemon.lemon.Msg', 'CreateTransaction', data)
    return promise.then((data) => MsgCreateTransactionResponse.decode(new Reader(data)))
  }

  UpdateTransaction(request: MsgUpdateTransaction): Promise<MsgUpdateTransactionResponse> {
    const data = MsgUpdateTransaction.encode(request).finish()
    const promise = this.rpc.request('lemonsuy.lemon.lemon.Msg', 'UpdateTransaction', data)
    return promise.then((data) => MsgUpdateTransactionResponse.decode(new Reader(data)))
  }

  DeleteTransaction(request: MsgDeleteTransaction): Promise<MsgDeleteTransactionResponse> {
    const data = MsgDeleteTransaction.encode(request).finish()
    const promise = this.rpc.request('lemonsuy.lemon.lemon.Msg', 'DeleteTransaction', data)
    return promise.then((data) => MsgDeleteTransactionResponse.decode(new Reader(data)))
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
