import CommanBanner from '@/components/banner/CommanBanner'
import React from 'react'
import Calculator from './components/Calculator'

const page = () => {

    return (
        <div>
            <CommanBanner title="BC PNP SCORE CALCULATOR" />
            <Calculator />
        </div>
    )
}

export default page