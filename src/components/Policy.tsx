"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Polygon from "../images/Polygon.png";
import Polygon1 from "../images/Polygon1.png";
import about1 from "../images/about1.png";
import Link from "next/link";
import emailjs from '@emailjs/browser';

const Policy = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [question, setQuestion] = useState("");
  const [questionError, setQuestionError] = useState("");
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setQuestion(value);
    if (value.length < 10 || value.length > 500) {
      setQuestionError("Question must be between 10 and 500 characters long.");
    } else {
      setQuestionError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    if (!name.trim()) {
      setNameError("Please enter your name");
      return;
    }
    setNameError('');

    if (!email.trim()) {
      setEmailError("Please enter your Email");
      return;
    }
    setEmailError('');

    if (question.length < 10 || question.length > 500) {
      setQuestionError("Question must be between 10 and 500 characters long.");
      return;
    }

    console.log("the value of fields are shown here : ", name, email, question);
    // Additional form submission logic

    emailjs.sendForm('service_2amws0d', 'template_xhk8ddz', form.current!, 'V3m6c5qimGtsOA6yF')
      .then((result: any) => {
        console.log(result.text);
      }, (error: any) => {
        console.log(error.text);
      });

    setEmail("")
  };
  const faqItems = [
    {
      question: "Late exit from surgery policy",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, animi?",
    },
    {
      question: "Refund/Cancellation Policy",
      answer: "Answer for the second question.",
    },
    {
      question: "Recovery Policy",
      answer: "Answer for the third question.",
    },
    {
      question: "Timing Policy",
      answer: "Answer for the fourth question.",
    },
    {
      question: "Overnight Parking Policy",
      answer:
        " Clients who have packages that include overnight Recovery Assistant care are responsible for parking fees. At the conclusion of service, the client will be invoiced.",
    },
  ];


  const [accordionStates, setAccordionStates] = useState(
    Array.from({ length: faqItems.length }, () => false)
  );

  const handleAccordionClick = (index: number) => {
    const newAccordionStates = accordionStates.map((state, i) =>
      i === index ? !state : false
    );
    setAccordionStates(newAccordionStates);
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start ">
        <div className="w-[66%] px-10  pt-6 md:pt-16 ml-22">
          <div className="flex flex-col lg:leading-[100px]">
            <p className="text-5xl md:text-7xl xl:text-8xl font-bold font-montserrat">
              It’s All
            </p>
            <p className="text-5xl md:text-7xl xl:text-8xl font-bold font-montserrat">
              About The{" "}
            </p>
            <p className="text-5xl md:text-7xl xl:text-8xl font-bold font-montserrat ">
              Fine Print Babe
            </p>
          </div>
          <div className="flex justify-center items-center md:justify-start mt-4 md:mt-8 gap-8">
            <Link href='#read-our-policy' className="bg-[#3BAFBF] px-4 py-2 text-[16px] md:text-base font-semibold uppercase  text-white">
              View Policies
            </Link>
            <Link href='/resourcehub' className="text-[#3BAFBF] font-montserrat text-[16px] font-bold leading-7 uppercase mt-1">
              View our booking resource hub
            </Link>
          </div>
        </div>

        <div className="w-full md:w-[34%] mt-4 md:mt-0 md:ml-4 lg:ml-8 relative">
          <Image
            src={about1}
            alt="Logo"
            className="w-full md:w-[506px] lg:w-[606px] h-[480px] lg:h-[640px] mix-blend-multiply object-cover"
          />
        </div>
      </div>

      <div className="w-full relative md:-top-24">
        <div className="py-12 w-full h-[141px] bg-cover bg-[url('../images/realmiami.png')]">
          <div className="flex justify-center items-center w-auto h-[27px]">
            <h1
              className="text-[#3BAFBF] text-center font-niconne text-5xl lg:text-[64px] font-medium"
              style={{ textShadow: "2px 2px 2px white,2px 2px 2px white" }}
            >
              Drip N Bodied Policy
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full " id="read-our-policy">
        <div className="w-full md:w-[1000px] mx-auto">
          <div className="md:mb-16 flex justify-center" >
            <h2 className="font-bold text-4xl text-[24px] leading-8 md:leading-29 tracking-normal text-center">
              Read Our Policy
            </h2>
          </div>
          <div className="border-t border-t-gray-300"></div>
          <div className="bg-white px-0   rounded-md ">
            {faqItems.map((item, index) => (
              <div key={index} className=" p-3 ">
                <input
                  type="checkbox"
                  id={`item${index}`}
                  className="hidden"
                  checked={accordionStates[index]}
                />
                <label
                  htmlFor={`item${index}`}
                  className="flex items-center justify-between cursor-pointer p-2 rounded-md ga-4 md:gap-8 hover:bg-pink-300/25"
                  onClick={() => handleAccordionClick(index)}
                >
                  <span className="text-black font-montserrat text-base font-bold">
                    {item.question}
                  </span>
                  {accordionStates[index] ? (
                    <Image
                      src={Polygon1}
                      alt=""
                      width={100}
                      height={100}
                      className="w-3 h-2"
                    />
                  ) : (
                    <Image
                      src={Polygon}
                      alt=""
                      width={100}
                      height={100}
                      className="w-3 h-2"
                    />
                  )}
                </label>
                {accordionStates[index] && (
                  <div id={`accordion-item-${index + 1}`} className="px-2 py-4">
                    <p className=" text-black font-montserrat text-base font-normal">
                      {item.answer}
                    </p>
                  </div>
                )}
                <div
                  className={`${index === faqItems.length - 1
                    ? ""
                    : "border-b border-b-gray-300 mt-3"
                    }`}
                ></div>
              </div>
            ))}
            <div className="text-center my-5">
              <Link href='/resourcehub' className="text-[#3BAFBF] font-montserrat text-md font-bold leading-[27px] uppercase">View our booking resource hub</Link>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center"
          style={{
            background:
              "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 8.33%), rgba(244, 181, 217, 0.17)",
          }}>
          <div className="w-[70%] mx-auto">
            <div className="mt-12 text-[24px]  font-bold flex justify-center text-md">
              <h2 className="pl-10">Email Us Your Question</h2>
            </div>
            <form ref={form}>
              <div className="mt-6 p-6">
                <p className="pb-4 font-bold ">How shall we address you?</p>
                <input
                  type="text"
                  value={name}
                  placeholder="Enter your full name"
                  className="border border-black outline-none w-full p-3 bg-white"
                  onChange={handleNameChange}
                />
                {nameError && <p className="text-red-500">{nameError}</p>}
              </div>
              <div className="p-6">
                <p className="pb-4 font-bold ">How can we contact you?</p>
                <input
                  type="text"
                  value={email}
                  placeholder="Enter your email"
                  className="border border-black outline-none w-full p-3 bg-white"
                  onChange={handleEmailChange}
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
              </div>
              <div className="p-6">
                <p className="pb-4 font-bold">
                  Tell us about your question. (Please use 10 to 500 characters)
                </p>
                <textarea
                  id="question"
                  name="question"
                  placeholder="Enter your question and any additional details"
                  value={question}
                  onChange={handleQuestionChange}
                  className={`border ${questionError ? "border-red-500" : "border-black"} w-full h-[300px] outline-none p-3`}
                />
                {questionError && <p className="text-red-500">{questionError}</p>}
              </div>
              <div className="mb-20 ml-5">
                <button onClick={handleSubmit} className="text-white font-montserrat text-md font-semibold uppercase bg-[#3BAFBF] px-4 py-1">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
