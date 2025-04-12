import CommanBanner from '@/components/banner/CommanBanner'
import React from 'react'
import FSWCalculator from './components/FSWCalculator'

const page = () => {
    return (
        <div>
            <CommanBanner title="FSW SCORE CALCULATOR" src='/tnc/bnr3.webp'/>
            <FSWCalculator />
        </div>
    )
}

export default page