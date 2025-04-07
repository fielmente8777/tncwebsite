import React from 'react'

interface CommanBannerProps {
    title: string;
}

// CommanBanner component to display a banner with a title
const CommanBanner: React.FC<CommanBannerProps> = ({ title }) => {
    return (
        <div className='bg-image h-[30vh] overflow-hidden flex justify-center items-center text-4xl text-white font-bold' >{title}</div>
    )
}

export default CommanBanner