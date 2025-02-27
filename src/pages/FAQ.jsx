import React, { useState } from 'react';
import { GoTriangleRight } from 'react-icons/go';

const FAQ = () => {
  const faqs = [
    { question: 'What is Frontend Practice?', answer: 'Frontend Practice offers developers the opportunity to practice and improve their skills in design, interactions, animations, responsiveness, troubleshooting, and more by providing a selection of real websites for them to recreate from scratch. This hands-on approach allows developers to gain a diverse set of valuable skills that will make them more employable in the industry.' },
    { question: 'How can I start practicing?', answer: 'You can start practicing by selecting a project from the Frontend Practice website and trying to recreate it from scratch using HTML, CSS, and JavaScript or any frontend framework of your choice.' },
    { question: 'Is Frontend Practice free?', answer: 'The selection of websites featured on Frontend Practice is based on personal preference and takes into consideration various factors, including design and style, difficulty to recreate, and elements and features that offer a learning opportunity through recreation.' },
    { question: 'Where can I learn to code?', answer: 'The selection of websites featured on Frontend Practice is based on personal preference and takes into consideration various factors, including design and style, difficulty to recreate, and elements and features that offer a learning opportunity through recreation.' },
    { question: 'Which languages do I use for these projects?', answer: 'We encourage you to make these projects your own by incorporating your own colors, content, and images. If you choose to use these projects for your portfolio, please clearly state that it is an "unofficial' },
    { question: 'Why did you pick these websites?', answer: 'Yes, Frontend Practice is completely free for developers to use and improve their skills.' },
    { question: 'Can I use these in my portfolio?', answer: 'How dare they update the website! We will talk with their manager right away. If they do not respond, we all periodically check the websites we feature and make the necessary updates.' },
    { question: 'Why does the live website not look like the project anymore?', answer: 'Yes, Frontend Practice is completely free for developers to use and improve their skills.' },
    { question: 'Where did some of the projects go?', answer: 'Occasionally we will retire projects from the main collection if the design is no longer up to date or an archived version is not available.' },
   
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-full py-4'>
      <div className='flex justify-center items-center mt-15'>
        <h1 className='text-7xl text-center md:w-[50%] font-[Playfair] font-black'>Frequently Asked Questions</h1>
      </div>
      <div className='md:flex md:flex-col md:justify-center md:items-center px-3 mt-10'>
        {faqs.map((faq, index) => (
          <div key={index} className='md:w-[50%] mt-5'>
            <div className='flex bg-[#FAEBD7] items-center border-2 py-2 px-4 cursor-pointer' onClick={() => toggleFAQ(index)}>
              <p className={`text-4xl transition-transform ${openIndex === index ? 'rotate-90' : ''}`}>
                <GoTriangleRight />
              </p>
              <h2 className='md:text-2xl text-xl font-bold tracking-tighter ml-3'>{faq.question}</h2>
            </div>
            {openIndex === index && (
              <div className='border-2 border-t-0 px-4 text-lg py-2'>
                <p className='font-[Roboto]'>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
