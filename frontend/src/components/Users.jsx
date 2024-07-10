// Users.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
            .then(response => {
                setUsers(response.data.user);
            });
    }, [filter]);

    return (
        <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="font-bold text-lg mb-4">Users</div>
            <input
                onChange={(e) => setFilter(e.target.value)}
                type="text"
                placeholder="Search users..."
                className="w-full px-2 py-1 border rounded border-gray-300 mb-4"
            />
            <div>
                {users.map((user, index) => (
                    <User key={user._id} user={user} index={index} navigate={navigate} />
                ))}
            </div>
        </div>
    );
};

function User({ user, index, navigate }) {
    const userColors = [
        "bg-blue-200",
        "bg-green-200",
        "bg-yellow-200",
        "bg-pink-200",
        "bg-purple-200",
        "bg-orange-200",
        "bg-cyan-200",
        "bg-indigo-200",
        "bg-red-200",
        "bg-teal-200",
    ];

    const colorIndex = index % userColors.length;

    return (
        <div className={`rounded-lg mb-4 overflow-hidden ${userColors[colorIndex]}`}>
            <div className="flex items-center p-4">
                <div className="rounded-full h-12 w-12 bg-gray-300 flex justify-center items-center mr-4">
                    <div className="text-xl font-bold">{user.firstName[0]}</div>
                </div>
                <div className="text-lg">{user.firstName} {user.lastName}</div>
                <div className="ml-auto">
                    <Button
                        onClick={() => navigate(`/send?id=${user._id}&name=${user.firstName}`)}
                        label="Send Money"
                    />
                </div>
            </div>
        </div>
    );
}

export default Users; // Export Users as default
