import React from "react";
import { Wrapper } from "./Header.styles";
import { Navbar } from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <>
            <Wrapper>
                <Navbar />
            </Wrapper>
            <Outlet />
        </>
    );
};
