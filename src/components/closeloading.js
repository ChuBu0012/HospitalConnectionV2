import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setclose } from '@/redux/statusloading';

export default function CloseLoading() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (document.readyState !== "loading") {
            dispatch(setclose());
        }
    }, [dispatch]);

    return null; // Since this component doesn't render anything, you can return null
}
