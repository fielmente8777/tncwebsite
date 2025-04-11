import CommanBanner from '@/components/banner/CommanBanner'
import React from 'react'
import Calculator from './components/Calculator'

const page = () => {

    return (
        <div>
            <CommanBanner title="BC PNP SCORE CALCULATOR" src='/tnc/bnr3.webp' />
            <Calculator />
        </div>
    )
}

export default page