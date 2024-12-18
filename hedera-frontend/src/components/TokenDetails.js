import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const TokenDetails = () => {
    const { tokenId } = useParams();
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!tokenId) {
            setError("Invalid Token ID");
            return;
        }

        const fetchTokenDetails = async () => {
            try {
                const response = await axios.get(
                    `https://mainnet-public.mirrornode.hedera.com/api/v1/tokens/${tokenId}`
                );
                setToken(response.data);
            } catch (error) {
                console.error("Error fetching token details:", error);
                setError("Failed to fetch token details");
            }
        };
        
        // const fetchRecentTokens = async () => {
        //     try {
        //         const response = await axios.get(
        //             `https://mainnet-public.mirrornode.hedera.com/api/v1/tokens`,
        //             {
        //                 params: {
        //                     order: "desc", // Fetch the most recent tokens first
        //                     limit: 10, // Adjust the limit as needed
        //                 },
        //             }
        //         );
        //         console.log("Recent Tokens:", response.data.tokens);
        //     } catch (error) {
        //         console.error("Error fetching recent tokens:", error);
        //         setError("Failed to fetch recent tokens");
        //     }
        // };
        
        fetchTokenDetails();
    }, [tokenId]);

    if (error) {
        return <p className="token-details">{error}</p>;
    }

    if (!token) {
        return <p className="token-details">Loading token details...</p>;
    }

    return (
        <div className="token-details">
            <h1>
                {token.name} ({token.symbol})
            </h1>
            <img
                className="token-image"
                src={token.logo || "https://via.placeholder.com/100"}
                alt={`${token.name} logo`}
            />
            <p>
                <strong>Token ID:</strong> {token.token_id}
            </p>
            <p>
                <strong>Total Supply:</strong> {token.total_supply}
            </p>
            <p>
                <strong>Type:</strong> {token.type}
            </p>
            <p>
                <strong>Created:</strong> {new Date(
                    token.created_timestamp * 1000
                ).toLocaleString()}
            </p>
        </div>
    );
};

export default TokenDetails;
