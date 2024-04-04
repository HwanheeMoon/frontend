import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

const KakaoRedirectPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleOAuthKakao = async (token) => {
        try {

            const client = axios.create({
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });
            localStorage.setItem("token", token);

            navigate("/");
        } catch (error) {
            navigate("/join");
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get("token");

        if (token) {
            handleOAuthKakao(token);
        }
    }, [location]);

    return (
        <div>
            <div>Processing...</div>
        </div>
    );
};

export default KakaoRedirectPage;