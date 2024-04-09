import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

const RedirectPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleOAuthKakao = async (token, id) => {
        try {

            const client = axios.create({
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("id", id);
            navigate("/");
        } catch (error) {
            navigate("/join");
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get("token");
        const id = searchParams.get("id");
        if (token) {
            handleOAuthKakao(token, id);
        }
    }, [location]);

    return (
        <div>
            <div>Processing...</div>
        </div>
    );
};

export default RedirectPage;