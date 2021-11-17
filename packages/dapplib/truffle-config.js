require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth shift protect guess knife bone then'; 
let testAccounts = [
"0xdc1b7976852c26153b778e5868bfe3349d3b98de9616dc91b0bb4cd4afe54aa3",
"0x789153c53a75ace86c546602e6b467c68e579701fdee7c6a410bbeb1df20fb02",
"0x6152aaf9f7d7a23132d3fff909bdc7b23e69ca31e39b0e42bd405133303b678c",
"0xfae8a629259495c750c85d71ffa0b768b11da9d7aecf8e57c4a40619a5b27b17",
"0x1ffb011d48a37a46e06d5b23ee274797f93f631bb19a7aa0e455dd56e2b80a5a",
"0xc9161db2e2386e59d32a23bc6e0166787c545f81506727b973d23fdd974973d3",
"0x2706b7db8a079a1e7dd8d8bc08587a8b9060b9fb18f68ea3bd8852b60bcbacca",
"0x1132559c752d756b5ddaaee3d625ea8ea8da8a8994d78fcfddd34e2b3b45ed01",
"0x7c15003a470f1be18777800eb02daf8364be5c443802dea4f43a80f7bf4c9008",
"0x2c7d630c5aae2aea9f8a9383c6d013c98651217d5ff13ca5bed249e777de3721"
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


