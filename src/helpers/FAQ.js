import React, {useState} from 'react';
import '../styles/FAQStyle.css';

export function SignaturePageFAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const toggleActiveIndex = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const questions = [
        {
            question: 'Podpis PAdES',
            answer: 'Jest to typ podpisu dedykowany dla plików PDF. Podpis zostaje zagnieżdżony w pliku. Nie należy podawać innegom pliku niż pdf.',
        },
        {
            question: 'Podpis XAdES',
            answer: 'Jest to podpis, którego można użyć do dowolnego rodzaju pliku. Utworzony zostanie plik z podpisem w formacie xml.',
        },
        {
            question: 'Podpis PAdES widoczny',
            answer: 'W tym wypadku zostanie utworzony podpis pades, a dodatkowo w dolnym rogu pierwszej strony dokumentu pojawią się dane osoby podpisującej(zalogowanej)',
        },
    ];

    return (
        <div className="faq-container-wrapper">
            <button className='faq-btn' onClick={toggleVisibility}>
                {isVisible ? "Ukryj FAQ" : "Pokaż FAQ"}
            </button>
            {isVisible && (
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
            )}
        </div>
    );
}

export function VerificationPageFAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const toggleActiveIndex = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const questions = [
        {
            question: 'Weryfikacja PAdES',
            answer: 'Jest to typ podpisu dedykowany dla plików PDF. Do weryfikacji należy podać podpisany plik PDF',
        },
        {
            question: 'Weryfikacja XAdES',
            answer: 'Typ podpisu obsługujący dowolny format plików. Do weryfikacji należy podać podpisany wcześniej plik, oraz plik z podpisem w formacie xml',
        },
    ];


    return (
        <div className="faq-container-wrapper">
            <button className='faq-btn' onClick={toggleVisibility}>
                {isVisible ? "Ukryj FAQ" : "Pokaż FAQ"}
            </button>
            {isVisible && (
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
            )}
        </div>
    );
}
