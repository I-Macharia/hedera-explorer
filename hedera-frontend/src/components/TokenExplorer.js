import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TokenExplorer = () => {
    const [tokens, setTokens] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTokens = async () => {
            try {
                const response = await axios.get(
                    "https://mainnet-public.mirrornode.hedera.com/api/v1/tokens"
                );
                setTokens(response.data.tokens);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching tokens:", error);
            }
        };

        fetchTokens();
    }, []);

    if (loading) {
        return <p>Loading tokens...</p>;
    }

    return (
        <div>
            <h1>Hedera Token Explorer</h1>
            <ul>
                {tokens.map((token) => (
                    <li key={token.token_id}>
                    <img 
                        className="token-image"
                        src={token.logo || "https://via.placeholder.com/100"} 
                        alt={token.name} 
                    />
                    <h3>{token.name} ({token.symbol})</h3>
                    <p>Total Supply: {token.total_supply}</p>
                    <Link to={`/tokens/${token.token_id}`}>View Details</Link>
                    
                </li>
                

                ))}
            </ul>
        </div>
    );
};

export default TokenExplorer;
