require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note pumpkin modify grace nation food sport'; 
let testAccounts = [
"0xacc65a82158205c2faf84382d0a4ec9c390e96d212d22e67d61329b8e3d2c4d8",
"0x31b949b75ef55cac2a032586cc496006b302dace16aae17a5739a9f247c2e0d6",
"0x060e5c0e133c56462c07e0e0e3b28b1bf8b25bd002459d02e7aae95e70077a59",
"0x6dcdf2a37d79783db0f362f038df7471f240539c5888362fb1513e0b4a8f62ce",
"0x34decc792611993f09210f6149a8f0d0b6e1022017949c7ce6cba6e01c71759a",
"0x51ac339bb7c9b7efa6688f861aefc1bbbb05dba91ba83d6f4f6e09e28f6e059c",
"0x0818e35c6a20024363aceb79c659ba15596b04e98b62def61f4e1391b5d4796b",
"0x1e9f08b6dcf08140f026fb782851487704ac31e1485f17bb31afdf4bd5e9a5c8",
"0xcc3bd94640f8e145ca705bafb2dce3d913a8beca30e72175de62e0bf206e5a76",
"0x22d47677c9984c9d49a7d5a7b3edb71c5e41e67931031b373ce6e4fd06acfbe5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


