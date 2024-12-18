import React from "react";

const Home = () => {
    return (
        <div style={{ padding: "20px", textAlign: "center", maxWidth: "800px", margin: "auto" }}>
            <h1>Welcome to the Hedera Token Explorer</h1>
            <p>
                The Hedera Token Service (HTS) is a secure, efficient, and versatile way to create and manage tokens on the Hedera network.
                HTS supports both fungible and non-fungible tokens, making it suitable for diverse use cases like payments, asset tokenization,
                and digital collectibles.
            </p>
            
            <h2>Creating a Token on Hedera</h2>
            <p>
                The process of creating a token on the Hedera network involves the following steps:
            </p>
            <ol style={{ textAlign: "left", margin: "0 auto", display: "inline-block" }}>
                <li>Set up a Hedera account and obtain your API keys or credentials.</li>
                <li>Define the token's properties, such as name, symbol, initial supply, and whether it is fungible or non-fungible.</li>
                <li>Use the Hedera SDK or REST API to submit a transaction to create the token.</li>
                <li>Once the token is created, you can manage it through features like minting, burning, and transferring.</li>
            </ol>

            <h3>Types of Tokens</h3>
            <p>
                Hedera supports two primary token types:
            </p>
            <ul style={{ textAlign: "left", margin: "0 auto", display: "inline-block" }}>
                <li>
                    <strong>Fungible Tokens:</strong> Tokens that are interchangeable and identical in value. 
                    Examples include cryptocurrencies, stablecoins, and loyalty points.
                </li>
                <li>
                    <strong>Non-Fungible Tokens (NFTs):</strong> Unique tokens that represent ownership of specific items, 
                    such as digital art, collectibles, and real-world assets.
                </li>
            </ul>
            <p>
                Both token types share core functionalities like minting, burning, and transferring. 
                However, fungible tokens focus on divisibility and uniformity, while NFTs prioritize uniqueness and metadata.
            </p>

            <h3>Code Snippets</h3>

            <h4>Creating a Fungible Token</h4>
            <pre style={{ textAlign: "left", background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
                <code>
{`const { Client, TokenCreateTransaction } = require("@hashgraph/sdk");

async function createFungibleToken() {
    const client = Client.forTestnet().setOperator(accountId, privateKey);

    const transaction = await new TokenCreateTransaction()
        .setTokenName("My Fungible Token")
        .setTokenSymbol("MFT")
        .setInitialSupply(1000000) // 1 million tokens
        .setTreasuryAccountId(treasuryAccountId)
        .execute(client);

    const receipt = await transaction.getReceipt(client);
    console.log("Fungible Token ID:", receipt.tokenId);
}
createFungibleToken();`}
                </code>
            </pre>

            <h4>Creating a Non-Fungible Token</h4>
            <pre style={{ textAlign: "left", background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
                <code>
{`const { Client, TokenCreateTransaction } = require("@hashgraph/sdk");

async function createNFT() {
    const client = Client.forTestnet().setOperator(accountId, privateKey);

    const transaction = await new TokenCreateTransaction()
        .setTokenName("My NFT")
        .setTokenSymbol("NFT")
        .setTokenType("NON_FUNGIBLE_UNIQUE")
        .setTreasuryAccountId(treasuryAccountId)
        .execute(client);

    const receipt = await transaction.getReceipt(client);
    console.log("NFT Token ID:", receipt.tokenId);
}
createNFT();`}
                </code>
            </pre>

            <h2>Start Your Token Journey</h2>
            <p>
                The Hedera Token Service makes token creation and management simple, efficient, and scalable. 
                Whether you're building a payment system, launching a new cryptocurrency, or creating unique NFTs, 
                Hedera offers the tools you need.
            </p>
        </div>
    );
};

export default Home;
