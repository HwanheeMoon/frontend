import React from "react";

import Header from "../section/Header";

const LoginPage = () => {

    return(
        <div>
            <Header />
            <div style={{textAlign: 'center', marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{color: 'gray', fontWeight: 'normal', marginBottom: '20px'}}>간편 로그인</h1>
            </div>
        </div>
    );
};

export default LoginPage;