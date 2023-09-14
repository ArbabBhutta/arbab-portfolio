import { useState,useEffect } from "react";
export const TypingHeading = () => {
    const [text, setText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [showbtn,setShowbtn]=useState(false)
  
    const fullText = "Welcome! my name is  Arbab Ahmad Khan Crafting immersive user experiences through clean and intuitive interfaces is my passion as a front-end developer." ; // Your desired text
    const ScndText="lololo"
  
    const typeNextCharacter = () => {
      if (textIndex < fullText.length) {
        setText(text + fullText.charAt(textIndex));
        setTextIndex(textIndex + 1);
      }
    };
  
   const  showHead =()=>{
       
      if (textIndex < fullText.length) {
        const typingTimeout = setTimeout(typeNextCharacter, 50); // Adjust typing speed here
        return () => clearTimeout(typingTimeout);
      }
      setShowbtn(true)
   }
   useEffect(()=>{
    showHead()
   })
    return (

      <div>
         <h2 className="mt-5" style={{color:"white"}}>{text}</h2> {showbtn ? <div style={{textAlign:"center"}}><button className="contact_me mt-3">Contact Me</button> </div>:<p></p>} 
      </div>

    );
  };
  