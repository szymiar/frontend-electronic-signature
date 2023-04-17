import React, {useState} from 'react';
import '../styles/FAQStyle.css';

export function SignaturePageFAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActiveIndex = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const questions = [
        {
            question: 'Co to jest PAdES',
            answer: 'Było 10000 razy, używaj szukaj. Temat zamykam',
        },
        {
            question: 'Nie działa mi, co mam zrobić',
            answer: 'Zrestartuj komputer i spróbuj ponownie',
        },
        {
            question: 'Co to jest PAdES widoczny',
            answer: 'To jest pades, tylko widoczny',
        },
    ];


    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <ul>
                {questions.map((q, index) => (
                    <li
                        key={index}
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => toggleActiveIndex(index)}
                    >
                        <h3>{q.question}</h3>
                        <p>{q.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function VerificationPageFAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActiveIndex = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const questions = [
        {
            question: 'Co to jest PAdES',
            answer: 'Było 10000 razy, używaj szukaj. Temat zamykam',
        },
        {
            question: 'Nie działa mi, co mam zrobić',
            answer: 'Zrestartuj komputer i spróbuj ponownie',
        },
        {
            question: 'Co to jest PAdES widoczny',
            answer: 'To jest pades, tylko widoczny',
        },
    ];


    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <ul>
                {questions.map((q, index) => (
                    <li
                        key={index}
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => toggleActiveIndex(index)}
                    >
                        <h3>{q.question}</h3>
                        <p>{q.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
