import React from 'react'
import { ArrowUpIcon, FacebookIcon } from '@/data/icons'

const ServiceData = [
    {
        icon: <FacebookIcon />,
        title: "Temporary Residence",
        button: "Read more"
    },
    {
        icon: <FacebookIcon />,
        title: "Permanent Residence",
        button: "Read more"
    },
    {
        icon: <FacebookIcon />,
        title: "Family & Sponsorship",
        button: "Read more"
    },
    {
        icon: <FacebookIcon />,
        title: "FlagPoling Application",
        button: "Read more"
    },
]
const ServiceSection = () => {
    return (
        <div className='max-width'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'>

                {ServiceData.map((data, index) => (
                    <div key={index} className='bg-white shadow-2xl py-10 px-5 flex flex-col gap-2 items-center justify-center'>
                        <div className='h-[60px] w-[60px] flex justify-center items-center bg-[#c1282a] rounded-full overflow-hidden border text-white'>{data.icon}</div>
                        <h1 className='text-3xl text-center font-bold text-[#0d2252] max-md:px-5 '>{data.title}</h1>
                        <p className='text-xl flex items-center font-semibold text-[#0d2252] '>{data.button} <ArrowUpIcon /></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceSection