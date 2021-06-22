import React,{useState , useEffect} from "react";
import './styles/BookOnline.css'
import BookOnline1 from "./BookOnline1";
import PopUp from "./PopUp";
import './styles/PopUp.css'

const BookOnline=()=> {
  const [popUp , setPopUp]=useState(false);
  const [hide , setHide]=useState(false);
  const [first , setFirst]=useState(false);
  const [second , setSecond]=useState(false)
  const [third , setThird]=useState(false);

  const BookOnlines=[{
    name:'BoxFit',
    price:'60 USD',
    image:'https://static.wixstatic.com/media/c03e76b555b443bb89a250a681b9b0a1.jpg/v1/fill/w_724,h_448,al_c,lg_1,q_80/c03e76b555b443bb89a250a681b9b0a1.webp',
    unwrappedText:` Describe your service here. What makes it great? 
                      Use short catchy text to tell people what you offer, 
                      and the benefits they will receive. A great description 
                      gets readers in the mood, and makes them more likely to 
                      go ahead and book.`,
    location:'Location & Contact Details',
    email:'ilyaillych@gmail.com',
    trigger:first,
    setTrigger:setFirst,
  },
  {
    name:'Boxing for Beginners',
    price:'60 USD',
    image:'https://static.wixstatic.com/media/268481235d914a1cbb53bc43b8c73c05.jpg/v1/fill/w_724,h_448,al_c,lg_1,q_80/268481235d914a1cbb53bc43b8c73c05.webp',
    unwrappedText:` Describe your service here. What makes it great? 
                      Use short catchy text to tell people what you offer, 
                      and the benefits they will receive. A great description 
                      gets readers in the mood, and makes them more likely to 
                      go ahead and book.`,
    location:'Location & Contact Details',
    email:'ilyaillych@gmail.com',
    trigger:second,
    setTrigger:setSecond,
  },
  {
    name:'Boxing for Pros',
    price:'60 USD',
    image:'https://static.wixstatic.com/media/806385b860574afb8f9eee510ff3b0fc.jpg/v1/fill/w_724,h_448,al_c,lg_1,q_80/806385b860574afb8f9eee510ff3b0fc.webp',
    unwrappedText:` Describe your service here. What makes it great? 
                      Use short catchy text to tell people what you offer, 
                      and the benefits they will receive. A great description 
                      gets readers in the mood, and makes them more likely to 
                      go ahead and book.`,
    location:'Location & Contact Details',
    email:'ilyaillych@gmail.com',
    trigger:third,
    setTrigger:setThird,
  }]

  return (
    <section>
      <PopUp popUp={popUp} setPopUp={setPopUp}/>
        <div className="BookOnline">
          {(!first && !second && !third )? (<h1 className="BookOnline_header">MY CLASSES</h1>):('')}
          <div className="BookOnline_Plans">
            {BookOnlines.map(BookOnline=>(
                <BookOnline1 name={BookOnline.name}
                            price={BookOnline.price}
                            image={BookOnline.image}
                            unwrappedText={BookOnline.unwrappedText}
                            location={BookOnline.location}
                            email={BookOnline.email}
                            trigger={BookOnline.trigger}
                            setTrigger={BookOnline.setTrigger}
                            setPopUp={setPopUp}
                            hide={hide}
                            setHide={setHide}/>
            ))}
              
          </div>
      </div>
    </section>
    
  );
}

export default BookOnline;
