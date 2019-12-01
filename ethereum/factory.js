import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x8c1f7DF9A917BBC50fc6f3b5F84f3A1B8DA430f8'
);

export default instance;