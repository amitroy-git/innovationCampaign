import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xaE690bE6Bd070100d74c9a6b3263596ad1894006'
);

export default instance;