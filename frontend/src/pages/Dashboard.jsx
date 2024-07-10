// Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance"; // Correct import with curly braces for named export
import Users from "../components/Users";

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("Token from localStorage:", token);
        const fetchBalance = async () => {
            try {
                const response = await axios.get("/api/v1/account/balance", {
                    Headers: {
                        "x-auth-token": token,
                    },
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBalance();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Appbar />
            <div className="m-8">
                <Balance value={balance} /> {/* Ensure Balance is used correctly */}
                <Users />
            </div>
        </div>
    );
};
