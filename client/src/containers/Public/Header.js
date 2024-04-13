import React, { useCallback } from "react";
import logo from '../../assets/logo-removebg.png';
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate } from 'react-router-dom';
import {path} from '../../ultils/constant';

const { GoPlusCircle } = icons

const Header = () => {
    const navigate = useNavigate()
    const goToLogin = useCallback(() => {
        navigate(path.LOGIN)
    }, [])
    return (
        <div className="w-1100 flex items-center justify-between">
            <img src={logo} alt="logo" className="w-[70px]  object-container" />

            <div className="flex items-center gap-1">
                <small>HomeStar xin chào!</small>
                <Button
                    text={'Đăng nhập'} textColor='text-white'
                    bgColor='bg-[#3961fb]' 
                    onClick={goToLogin}/>
                <Button
                    text={'Đăng ký'} textColor='text-white'
                    bgColor='bg-[#3961fb]' 
                    onClick={goToLogin}/>
                <Button
                    text={'Đăng tin mới'} textColor='text-white' bgColor='bg-secondary2'
                    IconAfter={GoPlusCircle} />
            </div>
        </div>
    )
}

export default Header