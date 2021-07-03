// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateBlock } from "./types/lemon/tx";
import { MsgDeleteTransaction } from "./types/lemon/tx";
import { MsgDeleteBlock } from "./types/lemon/tx";
import { MsgUpdateBlock } from "./types/lemon/tx";
import { MsgUpdateTransaction } from "./types/lemon/tx";
import { MsgCreateTransaction } from "./types/lemon/tx";


const types = [
  ["/lemonsuy.lemon.lemon.MsgCreateBlock", MsgCreateBlock],
  ["/lemonsuy.lemon.lemon.MsgDeleteTransaction", MsgDeleteTransaction],
  ["/lemonsuy.lemon.lemon.MsgDeleteBlock", MsgDeleteBlock],
  ["/lemonsuy.lemon.lemon.MsgUpdateBlock", MsgUpdateBlock],
  ["/lemonsuy.lemon.lemon.MsgUpdateTransaction", MsgUpdateTransaction],
  ["/lemonsuy.lemon.lemon.MsgCreateTransaction", MsgCreateTransaction],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateBlock: (data: MsgCreateBlock): EncodeObject => ({ typeUrl: "/lemonsuy.lemon.lemon.MsgCreateBlock", value: data }),
    msgDeleteTransaction: (data: MsgDeleteTransaction): EncodeObject => ({ typeUrl: "/lemonsuy.lemon.lemon.MsgDeleteTransaction", value: data }),
    msgDeleteBlock: (data: MsgDeleteBlock): EncodeObject => ({ typeUrl: "/lemonsuy.lemon.lemon.MsgDeleteBlock", value: data }),
    msgUpdateBlock: (data: MsgUpdateBlock): EncodeObject => ({ typeUrl: "/lemonsuy.lemon.lemon.MsgUpdateBlock", value: data }),
    msgUpdateTransaction: (data: MsgUpdateTransaction): EncodeObject => ({ typeUrl: "/lemonsuy.lemon.lemon.MsgUpdateTransaction", value: data }),
    msgCreateTransaction: (data: MsgCreateTransaction): EncodeObject => ({ typeUrl: "/lemonsuy.lemon.lemon.MsgCreateTransaction", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
