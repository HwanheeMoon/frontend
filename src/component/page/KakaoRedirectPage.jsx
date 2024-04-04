import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

const KakaoRedirectPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleOAuthKakao = async (token) => {
        try {
            // 카카오로부터 받아온 code를 서버에 전달하여 카카오로 회원가입 & 로그인한다
            localStorage.setItem("token", token);
            const client = axios.create({
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });

            client.interceptors.request.use(function (config) {
                const token = localStorage.getItem('token');
                config.headers.Authorization = `Bearer ${token}`;
                return config;
            });

            navigate("/");
        } catch (error) {
            navigate("/join");
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');

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