import Web3 from "web3";
const rinkebyAPI = 'https://rinkeby.infura.io/v3/23ca992ce76f4d3bb493fb06c9773e01';


//const web3 = new Web3(window.web3.currentProvider);

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    // We are in the browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
} else {
    // Browser doesnot have metamask
    const provider = new Web3.providers.HttpProvider(rinkebyAPI,10);
    web3 = new Web3(provider);
}
export default web3;