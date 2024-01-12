import React from 'react'
import { useTranslation } from 'react-i18next';
import './faq.css'

function Faq() {
    const { t } = useTranslation();
  const faqItems = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1'),
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2'),
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3'),
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4'),
    },
  ];
  return (

    <div className='main-faq'>
    <div className='faq-container'> 
    <h1 className='speacial-heading'> {t('FAQ.TITLE')}</h1>

            <div className='tab'>
                    {faqItems.map((item, index) => (
                        <div className='tab' key={index}>
                          <input type='radio' name='acc' id={`acc${index + 1}`} />
                          <label htmlFor={`acc${index + 1}`}>
                            <h2>{`0${index + 1}`}</h2>
                            <h3>{item.question}</h3>
                          </label>
                          <div className='content'>
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      ))}
            </div>

 
        </div>
    </div>

  )
}
export default Faq

// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import './faq.css';

// function Faq() {
//   const { t } = useTranslation();

//   const faqItems = [
//     {
//       question: t('faq.question1'),
//       answer: t('faq.answer1'),
//     },
//     {
//       question: t('faq.question2'),
//       answer: t('faq.answer2'),
//     },
//     {
//       question: t('faq.question3'),
//       answer: t('faq.answer3'),
//     },
//     {
//       question: t('faq.question4'),
//       answer: t('faq.answer4'),
//     },
//   ];

//   return (
//     <divh1 className='main-faq'>
//       <div className='faq-container'>
//         < className='special-heading'> {t('FAQ.TITLE')}</>

//         {faqItems.map((item, index) => (
//           <div className='tab' key={index}>
//             <input type='radio' name='acc' id={`acc${index + 1}`} />
//             <label htmlFor={`acc${index + 1}`}>
//               <h2>{`0${index + 1}`}</h2>
//               <h3>{item.question}</h3>
//             </label>
//             <div className='content'>
//               <p>{item.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Faq;
