"use client"
import { SectionWithContainer } from '@/components';
import React, { useEffect, useState } from 'react'

const Calculator = () => {
    const [formData, setFormData] = useState({
        designation: '',
        frenchTest: '',
        wage: '',
        area: '',
        employmentOutside: '',
        educationOutside: '',
        clb: '0',
        experienceYears: '',
        experienceInCanada: '',
        currentlyWorking: '',
        educationLevel: '',
        educationInCanada: '',
    });

    const [score, setScore] = useState(0);

    const handleChange = (field: keyof typeof formData, value: string | number) => {
        setFormData({ ...formData, [field]: value });
    };

    const calculateScore = () => {
        let total = 0;

        if (formData.designation === 'yes') total += 5;
        if (formData.frenchTest === 'yes') total += 5;
        if (parseFloat(formData.wage) >= 25) total += 10;

        if (formData.area === 'area2') total += 10;
        else if (formData.area === 'area3') total += 15;

        if (formData.employmentOutside === 'yes') total += 10;
        if (formData.educationOutside === 'yes') total += 8;

        total += parseInt(formData.clb);

        // New scoring logic (example points, adjust as needed)
        switch (formData.experienceYears) {
            case '5+': total += 15; break;
            case '4-5': total += 12; break;
            case '3-4': total += 9; break;
            case '2-3': total += 6; break;
            case '1-2': total += 3; break;
            case 'less1': total += 1; break;
            default: break;
        }

        if (formData.experienceInCanada === 'yes') total += 10;
        if (formData.currentlyWorking === 'yes') total += 10;

        switch (formData.educationLevel) {
            case 'doctoral': total += 17; break;
            case 'masters': total += 15; break;
            case 'postgrad': total += 13; break;
            case 'bachelors': total += 11; break;
            case 'associate': total += 9; break;
            case 'diploma': total += 7; break;
            case 'highschool': total += 5; break;
            default: break;
        }

        if (formData.educationInCanada === 'yes') total += 5;

        setScore(total);
    };

    const resetForm = () => {
        setFormData({
            designation: '',
            frenchTest: '',
            wage: '',
            area: '',
            employmentOutside: '',
            educationOutside: '',
            clb: '0',
            experienceYears: '',
            experienceInCanada: '',
            currentlyWorking: '',
            educationLevel: '',
            educationInCanada: ''
        });
        setScore(0);
    };

    useEffect(() => {
        calculateScore()
    }, [formData]);


    return (
        <SectionWithContainer>
            <div className='max-w-4xl mx-auto'>

                <h1 className="text-3xl font-bold">BC PNP Points Calculator - New Version (2023)</h1>

                <hr className='h-px border-b-2 border-gray-400/50 mt-10' />
                <div className="space-y-6 mt-5">
                    <div>
                        <label className="block font-medium mb-1">Directly Related Work Experience in the Occupation of B.C. Job Offer</label>
                        <select className="w-full border p-2 rounded" value={formData.experienceYears} onChange={(e) => handleChange('experienceYears', e.target.value)}>
                            <option value="">Select experience</option>
                            <option value="5+">5 or more years</option>
                            <option value="4-5">At least 4 but less than 5 years</option>
                            <option value="3-4">At least 3 but less than 4 years</option>
                            <option value="2-3">At least 2 but less than 3 years</option>
                            <option value="1-2">At least 1 but less than 2 years</option>
                            <option value="less1">Less than 1 year</option>
                            <option value="none">None</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">At least 1 year of directly related experience in Canada?</label>
                        <div className="flex space-x-4">
                            <label><input type="radio" name="experienceInCanada" value="yes" onChange={(e) => handleChange('experienceInCanada', e.target.value)} /> Yes</label>
                            <label><input type="radio" name="experienceInCanada" value="no" onChange={(e) => handleChange('experienceInCanada', e.target.value)} /> No</label>
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Are you currently working full-time in B.C. for the employer in the occupation identified in the BC PNP registration?</label>
                        <div className="flex space-x-4">
                            <label><input type="radio" name="currentlyWorking" value="yes" onChange={(e) => handleChange('currentlyWorking', e.target.value)} /> Yes</label>
                            <label><input type="radio" name="currentlyWorking" value="no" onChange={(e) => handleChange('currentlyWorking', e.target.value)} /> No</label>
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Highest Level of Education</label>
                        <select className="w-full border p-2 rounded" value={formData.educationLevel} onChange={(e) => handleChange('educationLevel', e.target.value)}>
                            <option value="">Select education</option>
                            <option value="doctoral">Doctoral Degree</option>
                            <option value="masters">Master&apos;s Degree</option>
                            <option value="postgrad">Post-Graduate Certificate or Diploma</option>
                            <option value="bachelors">Bachelor&apos;s Degree</option>
                            <option value="associate">Associate Degree</option>
                            <option value="diploma">Post-secondary diploma/certificate</option>
                            <option value="highschool">Secondary School or less</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Was the above-mentioned post-secondary education completed in Canada?</label>
                        <div className="flex space-x-4">
                            <label><input type="radio" name="educationInCanada" value="yes" onChange={(e) => handleChange('educationInCanada', e.target.value)} /> Yes</label>
                            <label><input type="radio" name="educationInCanada" value="no" onChange={(e) => handleChange('educationInCanada', e.target.value)} /> No</label>
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Do you have Eligible Professional Designation in B.C.?</label>
                        <div className="flex space-x-4">
                            <label><input type="radio" name="designation" value="yes" onChange={(e) => handleChange('designation', e.target.value)} /> Yes</label>
                            <label><input type="radio" name="designation" value="no" onChange={(e) => handleChange('designation', e.target.value)} /> No</label>
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Have you taken the French language proficiency test within the past two years?</label>
                        <div className="flex space-x-4">
                            <label><input type="radio" name="frenchTest" value="yes" onChange={(e) => handleChange('frenchTest', e.target.value)} /> Yes</label>
                            <label><input type="radio" name="frenchTest" value="no" onChange={(e) => handleChange('frenchTest', e.target.value)} /> No</label>
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Hourly Wage of the B.C. Job Offer</label>
                        <input type="number" className="w-full border p-2 rounded" value={formData.wage} onChange={(e) => handleChange('wage', e.target.value)} />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Area Of Employment Within B.C.</label>
                        <select className="w-full border p-2 rounded" value={formData.area} onChange={(e) => handleChange('area', e.target.value)}>
                            <option value="">Please Select</option>
                            <option value="area1">Area 1: Metro Vancouver</option>
                            <option value="area2">Area 2: Squamish, Abbotsford, etc.</option>
                            <option value="area3">Area 3: Other Areas</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Have You Completed At Least One Year Full-Time Paid Employment in Area Outside MVRD?</label>
                        <div className="flex space-x-4">
                            <label><input type="radio" name="employmentOutside" value="yes" onChange={(e) => handleChange('employmentOutside', e.target.value)} /> Yes</label>
                            <label><input type="radio" name="employmentOutside" value="no" onChange={(e) => handleChange('employmentOutside', e.target.value)} /> No</label>
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Have You Graduated From A Public B.C. Postsecondary Institution Outside MVRD?</label>
                        <div className="flex space-x-4">
                            <label><input type="radio" name="educationOutside" value="yes" onChange={(e) => handleChange('educationOutside', e.target.value)} /> Yes</label>
                            <label><input type="radio" name="educationOutside" value="no" onChange={(e) => handleChange('educationOutside', e.target.value)} /> No</label>
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Canadian Language Benchmark Level</label>
                        <select className="w-full border p-2 rounded" value={formData.clb} onChange={(e) => handleChange('clb', e.target.value)}>
                            <option value="0">Below 4 or no test</option>
                            <option value="4">CLB 4</option>
                            <option value="5">CLB 5</option>
                            <option value="6">CLB 6</option>
                            <option value="7">CLB 7</option>
                            <option value="8">CLB 8</option>
                            <option value="9">CLB 9+</option>
                        </select>
                    </div>

                    <div className='flex  items-center justify-between'>
                        {/* <button onClick={calculateScore} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Calculate</button> */}
                        <div className="text-xl font-semibold border px-4 py-2 rounded bg-gray-100">

                            Calculation: {score}
                        </div>
                        <button onClick={resetForm} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Reset</button>

                    </div>


                </div>
            </div>
        </SectionWithContainer>
    )
}

export default Calculator