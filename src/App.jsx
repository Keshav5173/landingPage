import { useRef, useState } from 'react'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap' 
import ScrollTrigger from "gsap/ScrollTrigger";

import logoImg from "./assets/logo.png"

function App() {
  const headline1 = "Problem meets";
  const headline2 = "Solution";
  const t1=gsap.timeline();
  const t2=gsap.timeline();
  const t3 = gsap.timeline();
  const specialLetterRef = useRef(null);
  const openingBracs = "{";
  const closingBracs = "}";

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
    t1.from(".nav img",{
      x:-50,
      opacity:0,
    })
    t1.from(".dets h3",{
      y:-10,
      opacity:0,
      stagger: 0.2
    })
    t1.from(".dets button", {
      y:-10,
      opacity:0,
    })

    gsap.set(".heading1, .heading2, .highlightedObjective", {
      transformPerspective: 600,
      transformStyle: "preserve-3d"
    });

    t2.from(".h1Letter", {
      rotationX: -180,
      y:-150,
      opacity:0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power3.out",
    });
    
    t2.from(".h2Letter", {
      rotationX: -180,
      y:-150,
      opacity:0,
      duration: 0.3,
      stagger: 0.1,
      ease: "power3.out",
    });

    t2.from(".openingBracket",{
      x:-100,
      duration:0.4,
      opacity:0,
    })
    t2.from(".info",{
      opacity: 0,
      scale: 0.2,
      duration: 0.4,


    })
    t2.from(".closingBracket",{
      x:100,
      duration:0.4,
      opacity:0,
    })
    t2.from(".fountain-btn",{
      x: 200,
      opacity: 0,
      duration: 0.4,
    })
    gsap.to(".horizantalScroll", {
    transform: "translateX(-81%)",
    scrollTrigger: {  
      trigger: ".page2",
      scroller: 'body',
      markers: false,
      start: "top 0%",
      end: "top -200%",
      scrub: 4,
      pin: true,
    }
    })
    gsap.to(".highlightedLetter", {
    rotationX: 360,
    color: "#e78ae7",
    duration: 0.4,
    stagger: 0.05,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".page2",
      start: "top 60%",
      toggleActions: "play none none none",
    },
  });
    gsap.to(".highlightedLetter", {
    rotationX: 360,
    color: "#e78ae7",
    duration: 0.1,
    stagger: 0.05,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".page2",
      start: "top 60%",
      toggleActions: "play none none none",
    },
  });
  gsap.from(".lastLetters", {
    opacity: 0,
    ease: "bounce.in",
    y: -200,
    duration: 1.2,
    delay: 2,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page2",
      start: "top 60%",
      toggleActions: "play none none none",
      markers: false, 
    },
});
  gsap.from(".objWords", {
  y: 180,
  opacity: 0,
  duration: 5,
  stagger: 0.7,
  ease: "bounce.inOut",
  scrollTrigger: {
    trigger: ".companyObjective",
    scroller: 'body',
    start: "top 0%",
    end: "top -100%",
    toggleActions: "play none none none",
    once: true, 
    markers: false, 
    scrub: true,
  }
});


  gsap.from(".progressHeading h1", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".companyProgress",
      start: "top -100%",
      toggleActions: "play none none none",
      markers: false,
    }
  });

  // Animate heading description
  gsap.from(".progressHeading p", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".companyProgress",
      start: "top -100%",
      toggleActions: "play none none none",
      markers: false,
    }
  });

  // Animate all progress metrics (each div)
  gsap.from(".Progress > div", {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".companyProgress",
      start: "top -100%",
      toggleActions: "play none none none",
      markers: false,
    }
  });

  // Animate each number and label inside those divs
  gsap.from(".Progress > div h1, .Progress > div p", {
    opacity: 0,
    y: 50,
    stagger: 0.5,
    duration: 0.6,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".companyProgress",
      start: "top -100%",
      toggleActions: "play none none none",
      markers: false,
    }
  });


  })


const triggerFountain = () => {
  const symbols = document.querySelectorAll(".symbol");

  symbols.forEach((el, i) => {
    const angle = Math.random() * Math.PI * 2; // full circle
    const radius = 80 + Math.random() * 40;

    gsap.set(el, {
      x: 0,
      y: 0,
      opacity: 1,
    });

    gsap.to(el, {
      x: Math.cos(angle) * radius,
      y: -Math.abs(Math.sin(angle)) * radius * 1.2,
      opacity: 0,
      rotate: Math.random()*360,
      duration: 2 + Math.random(),
      ease: "expo.out",
      delay: i * 0.07,
    });
  });
};



  return (
    <div className='main'>
      <div className='page1'>
        <div className='nav'>
          <img src={logoImg} alt="logo" />
          <div className='dets'>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Solution</h3>
            <h3>Careers</h3>
            <h3>Blog</h3>
            <h3>Contacts</h3>
            <button>Signup</button>
          </div>
        </div>
        <div className='hero'>
          <p className='heading1'>
            {headline1.split("").map((char, index) => (
              <span className="h1Letter" key={index}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))} 
          </p>
          <p className='heading2'>{headline2.split("").map((char, index)=>(
            <span key={index} className={'h2Letter'}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}</p>
          <div className='openingBracket'>{openingBracs}</div>
          <div className='info'>Pravaah - Transforming India's Digital Future</div>
          <div className='closingBracket'>{closingBracs}</div>
          <div className="JoinUs">
            <button
              className="fountain-btn"
              onMouseEnter={() => triggerFountain()}
            >
              <p>Explore</p>
              <p>Solution</p>
              <span className="fountain-symbols">
                {"<>/{}(".split("").map((char, index) => (
                  <span className="symbol" key={index}>
                    {char}
                  </span>
                ))}
              </span>
            </button>
          </div>

        </div>
      </div>
      <div className='page2'>
            <div className='horizantalScroll'>
              <div className='companyDets'>
                <h1>{openingBracs}Why Pravaah{closingBracs}</h1>
                <p>At Pravaah, we’re building innovative digital infrastructure that powers India’s smart cities and connects millions of citizens to better public services. Our AI-driven smart mobility solutions are transforming urban transportation with real-time optimization and data-driven insights.
                  <span className="highlightedObjective">
                    {" We specialize in secure, scalable platforms that modernize government operations, making public service delivery more efficient and transparent. By integrating intelligent automation and machine learning"
                      .split("")
                      .map((char, index) => (
                        <span key={index} className="highlightedLetter">
                          {char === " " ? "\u00A0" : char}
                        </span>
                      ))}
                  </span>, we streamline processes and support faster, smarter decision-making. With a deep understanding of citizen-centric needs and government workflows, Pravaah bridges the gap between technology and governance. If you’re looking for reliable, future-ready solutions that drive meaningful impact—<span className='lastLetters'>Pravaah</span> <span className='lastLetters'>is</span> <span className='lastLetters'>the</span> <span className='lastLetters'>answer.</span></p>
              </div>
              <div className='companyObjective'>
                <span className="objective">
                  {"We're building the digital infrastructure that powers India's smart cities and connects millions of citizens to better services."
                    .split(" ")
                    .map((word, index) => (
                      <span key={index} className="objWords" style={{ marginRight: '6px' }}>
                        {word}&nbsp;
                      </span>
                    ))}
                </span>
              </div>
              <div className="companyProgress">
                <div className='progressHeading'>
                  <h1>Our Progress</h1>
                  <p>Our solutions are making a real impact across India's digital transformation journey.</p>
                </div >
                <div className='Progress'>
                  <div>
                    <h1>3+</h1>
                    <p>Government Pilots Initiated</p>
                  </div>
                  <div>
                    <h1>1000+</h1>
                    <p>Early Users & Stakeholders Impacted</p>
                  </div>
                  <div>
                    <h1>99.9%</h1>
                    <p>System uptime</p>
                  </div>
                  <div>
                    <h1>24/7</h1>
                    <p>Support Available</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="page3">
          <h1>Innovation that Matters</h1>
          <div className='projects'>
            <div >
            <h1>Smart Mobility Solution</h1>
            <p>Revolutionary platforms transforming urban transportation with AI-driven insights and real-time optimization.</p>
          </div>
          <div>
            <h1>Government Tech</h1>
            <p>Secure, scalable digital infrastructure solutions that modernize public services and enhance citizen experience.</p>
          </div>
          <div>
            <h1>AI-Powered Services</h1>
            <p>Intelligent automation and machine learning solutions that streamline operations and improve decision-making.</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default App
