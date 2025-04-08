"use client"
import { SectionWithContainer } from '@/components';
import React, { useEffect, useState } from 'react'
const FSWCalculator = () => {

    const [formData, setFormData] = useState({
        education: '',
        reading: '',
        writing: '',
        listening: '',
        speaking: '',
        experience: '',
        age: '',
        adaptability: []
    });

    const [score, setScore] = useState(0);

    const handleChange = (field: any, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleAdaptabilityChange = (value: any) => {
        setFormData(prev => {
            const updated = prev.adaptability.includes(value)
                ? prev.adaptability.filter(v => v !== value)
                : [...prev.adaptability, value];
            return { ...prev, adaptability: updated };
        });
    };

    const calculateScore = () => {
        let total = 0;

        // Education (max 25 points)
        const educationPoints = {
            doctoral: 25,
            masters: 23,
            bachelor3: 22,
            licensed: 22,
            twoDiplomas: 22,
            oneDiploma3: 21,
            twoYearDiploma: 19,
            oneYearDiploma: 15,
            highSchool: 5,
        };
        total += educationPoints[formData.education] || 0;

        // English Skills (max 24 points)
        const langPoints = scoreLangSkill(formData.reading) +
            scoreLangSkill(formData.writing) +
            scoreLangSkill(formData.listening) +
            scoreLangSkill(formData.speaking);
        total += langPoints;

        // Experience (max 15 points)
        const experiencePoints = {
            '1': 9,
            '2-3': 11,
            '4-5': 13,
            '6+': 15,
        };
        total += experiencePoints[formData.experience] || 0;

        // Age (max 12 points)
        const agePoints = {
            '18-35': 12,
            '36': 11,
            '37': 10,
            '38': 9,
            '39': 8,
            '40': 7,
            '41': 6,
            '42': 5,
            '43': 4,
            '44': 3,
            '45': 2,
            '46': 1,
        };
        total += agePoints[formData.age] || 0;

        // Adaptability (max 10 points)
        total += formData.adaptability.length * 5;

        setScore(total);
    };

    const scoreLangSkill = (score: any) => {
        if (score === '8') return 6;
        if (score === '7.5') return 5;
        if (score === '7') return 4;
        if (score === '6.5') return 3;
        if (score === '6') return 2;
        return 0;
    };

    const resetForm = () => {
        setFormData({
            education: '',
            reading: '',
            writing: '',
            listening: '',
            speaking: '',
            experience: '',
            age: '',
            adaptability: []
        });
        setScore(0);
    };

    useEffect(() => {
        calculateScore()
    }, [formData])
    return (
        <SectionWithContainer>
            <div className='max-w-4xl mx-auto'>


                <h1 className="text-3xl font-bold">CRS Points Calculator</h1>
                <hr className='h-px border-b-2 border-gray-400/50 mt-10' />

                <div className="space-y-4 mt-5">
                    {/* EDUCATION */}
                    <div>
                        <h2 className="font-semibold">Education (Maximum 25 points)</h2>
                        <div className="space-y-1 px-3">
                            {[
                                { value: 'doctoral', label: 'University degree at the Doctoral (PhD) level or equal' },
                                { value: 'masters', label: 'University degree at the Master’s level or equal' },
                                { value: 'bachelor3', label: 'Bachelor’s degree or more than 3 years' },
                                { value: 'licensed', label: 'Professional degree needed to practice in licensed profession' },
                                { value: 'twoDiplomas', label: 'Two or more Canadian post-secondary diplomas (one 3+ years)' },
                                { value: 'oneDiploma3', label: 'Post-secondary diploma for 3+ years' },
                                { value: 'twoYearDiploma', label: 'Post-secondary diploma for 2+ years' },
                                { value: 'oneYearDiploma', label: 'Post-secondary diploma for 1 year' },
                                { value: 'highSchool', label: 'Canadian high school diploma or equal' },
                            ].map(opt => (
                                <label key={opt.value} className="block">
                                    <input
                                        type="radio"
                                        name="education"
                                        value={opt.value}
                                        onChange={(e) => handleChange('education', e.target.value)}
                                    /> {opt.label}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* ENGLISH SKILLS */}
                    <div>
                        <h2 className="font-semibold">English Skills (Maximum 24 points)</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-5'>
                            {['reading', 'writing', 'listening', 'speaking'].map(skill => (
                                <div key={skill} className='flex flex-col'>
                                    <label className="capitalize block font-medium">{skill}</label>
                                    {[6, 6.5, 7, 7.5, 8].map(level => (
                                        <label key={level} className="ml-3">
                                            <input
                                                type="radio"
                                                name={skill}
                                                value={level}
                                                onChange={(e) => handleChange(skill, e.target.value)}
                                            /> {level}
                                        </label>
                                    ))}
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* EXPERIENCE */}
                    <div>
                        <h2 className="font-semibold mt-2">Experience (Maximum 15 points)</h2>
                        <select
                            className="w-full border p-2 rounded"
                            value={formData.experience}
                            onChange={(e) => handleChange('experience', e.target.value)}
                        >
                            <option value="">Select Experience</option>
                            <option value="1">1 year</option>
                            <option value="2-3">2-3 years</option>
                            <option value="4-5">4-5 years</option>
                            <option value="6+">6 or more years</option>
                        </select>
                    </div>

                    {/* AGE */}
                    <div>
                        <h2 className="font-semibold mt-2">Age (Maximum 12 points)</h2>
                        <select
                            className="w-full border p-2 rounded"
                            value={formData.age}
                            onChange={(e) => handleChange('age', e.target.value)}
                        >
                            <option value="">Select Age</option>
                            {[
                                '18-35', '36', '37', '38', '39', '40', '41', '42',
                                '43', '44', '45', '46'
                            ].map(age => (
                                <option key={age} value={age}>{age}</option>
                            ))}
                        </select>
                    </div>

                    {/* ADAPTABILITY */}
                    <div>
                        <h2 className="font-semibold mt-2">Adaptability (Maximum 10 points)</h2>
                        <div className="space-y-1 px-3">
                            {[
                                'Your spouse/partner has CLB 4+ in all language skills',
                                'You studied full-time for 2+ years in a Canadian secondary/post-secondary institution',
                                'Your spouse/partner completed 2+ years of study in Canada',
                                'You or spouse/partner have a relative in Canada (18+ and citizen/permanent resident)',
                                'You or spouse/partner have Canadian work experience (1 year full-time)'
                            ].map((item, idx) => (
                                <label key={idx} className="block">
                                    <input
                                        type="checkbox"
                                        value={idx}
                                        onChange={() => handleAdaptabilityChange(idx)}
                                    /> {item}
                                </label>
                            ))}
                        </div>
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

export default FSWCalculator