// Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
    const [balance, setBalance] = useState(null); // Initialize with null or a default value

    useEffect(() => {
        fetchBalance();
    }, []);

    const fetchBalance = async () => {
        try {
            const response = await axios.get("/api/v1/account/balance");
            if (response.status === 200) {
                setBalance(response.data.balance);
            } else {
                console.error("Unexpected response:", response);
            }
        } catch (error) {
            console.error("Error fetching balance:", error);
        }
    };

    return (
        <div>
            <Appbar />
            <div className="m-8">
                {balance !== null ? (
                    <Balance value={balance} />
                ) : (
                    <p>Loading...</p>
                )}
                <Users />
            </div>
        </div>
    );
};


