import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import LogoutButton from "./LogoutButton";
import { getCurrentUser } from "../api/auth";

const Header: React.FC = () => {
    const { token } = useAuth();
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            if (token) {
                try {
                    const user = await getCurrentUser(token);
                    setUsername(user.username); // Assuming the user object has a username field
                } catch (error) {
                    console.error("Failed to fetch current user:", error);
                }
            }
        };

        fetchCurrentUser();
    }, [token]);

    return (
        <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm font-serif">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold ">Fast blog</h1>
                <div className="space-x-4">
                    {token ? (
                        <>
                            <span className="text-gray-800">Welcome, {username}</span>
                            <LogoutButton />
                        </>
                    ) : (
                        <>
                            <a
                                href="/login"
                                className=" hover:text-gray-400 transition duration-300"
                            >
                                Login
                            </a>
                            <a
                                href="/register"
                                className="bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
                            >
                                Sign Up
                            </a>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;