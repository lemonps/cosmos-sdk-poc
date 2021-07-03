// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateBlock: (data) => ({ typeUrl: "/lemonsuy.lemon.lemon.MsgCreateBlock", value: data }),
        msgDeleteTransaction: (data) => ({ typeUrl: "/lemonsuy.lemon.lemon.MsgDeleteTransaction", value: data }),
        msgDeleteBlock: (data) => ({ typeUrl: "/lemonsuy.lemon.lemon.MsgDeleteBlock", value: data }),
        msgUpdateBlock: (data) => ({ typeUrl: "/lemonsuy.lemon.lemon.MsgUpdateBlock", value: data }),
        msgUpdateTransaction: (data) => ({ typeUrl: "/lemonsuy.lemon.lemon.MsgUpdateTransaction", value: data }),
        msgCreateTransaction: (data) => ({ typeUrl: "/lemonsuy.lemon.lemon.MsgCreateTransaction", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
