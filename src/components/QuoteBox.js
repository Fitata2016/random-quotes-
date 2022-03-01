import React from 'react';
import { useState } from 'react';
import quotes from "../quotes.json";

const getRandom = () => Math.floor(Math.random() * quotes.length);
const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#6495ed",
    "rgb(197, 155, 155)",
    "rgb(127, 255, 212)"
  ];
  console.log(quotes)
const QuoteBox = () => {
    const [quote, setQuote] = useState(quotes[getRandom()]);

  const changeQuote = () => {
        const random = getRandom();
        setQuote(quotes[random]);
  }
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style = `background: ${color}`;

    return (
        <div className='card'style={{ color: color }}>
            <div className='section1'>
                <i className="fas fa-quote-left"></i><b>{quote.quote}</b>
            </div>
            <div className='section2'>
            <b>{quote.author}</b>
            <button onClick={changeQuote}style={{ background: color }}><i className="fas fa-chevron-right"></i></button>
            </div>
        </div>
    );
};

export default QuoteBox;