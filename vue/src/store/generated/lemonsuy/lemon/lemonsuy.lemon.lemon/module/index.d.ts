import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateBlock } from "./types/lemon/tx";
import { MsgDeleteTransaction } from "./types/lemon/tx";
import { MsgDeleteBlock } from "./types/lemon/tx";
import { MsgUpdateBlock } from "./types/lemon/tx";
import { MsgUpdateTransaction } from "./types/lemon/tx";
import { MsgCreateTransaction } from "./types/lemon/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateBlock: (data: MsgCreateBlock) => EncodeObject;
    msgDeleteTransaction: (data: MsgDeleteTransaction) => EncodeObject;
    msgDeleteBlock: (data: MsgDeleteBlock) => EncodeObject;
    msgUpdateBlock: (data: MsgUpdateBlock) => EncodeObject;
    msgUpdateTransaction: (data: MsgUpdateTransaction) => EncodeObject;
    msgCreateTransaction: (data: MsgCreateTransaction) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
