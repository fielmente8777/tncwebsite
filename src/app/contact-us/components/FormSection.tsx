import { SectionWithContainer } from '@/components'
import Form from '@/components/Form'
import Map from '@/components/maps/Map'
import Image from 'next/image'
import React from 'react'

const FormSection = () => {
    return (
        <SectionWithContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <div className='relative lg:aspect-[4/5]'>
                    <Image src="https://tncimmigration.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-24-at-23.35.17-2.jpeg" alt="" fill className='absolute object-contain' />
                </div>
                <div className='flex flex-col justify-center'>
                    <hr className='w-[50px] border-b-4 border-orange-700' />
                    <h1 className='text-4xl mt-5 font-bold'>
                        Make a free consultation with our expert team to solve your prolems.
                    </h1>

                    <div className='mt-10'>
                        <Form />

                    </div>
                </div>
            </div>

            <div className='mt-10 lg:mt-20'>
                <Map src="" />

            </div>
        </SectionWithContainer>
    )
}

export default FormSection