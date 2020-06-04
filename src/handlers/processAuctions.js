import { getEndedAuctions } from '../lib/getEndedAuctions';

async function processAuctions(event, context) {
    const auctionToClose = await getEndedAuctions();
    console.log(auctionToClose);
}

export const handler = processAuctions;