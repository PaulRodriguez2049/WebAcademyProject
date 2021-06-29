import React , {useState , useEffect} from 'react';
import Section5GalleryFull from '../section5/section5GalleryFull';
import { Link } from 'react-router-dom';

const Section5=({setSharePicture})=>{
    
    const[windowWidth , setWindowWidth]= useState(window.screen.availWidth);
    window.addEventListener('resize' , (()=>{setWindowWidth(window.screen.availWidth)}))

    

    const Gallery=[{
        title:'I’m an image title',
        text1:'Describe your image here. Use catchy text to tell people the story behind the photo.',
        text2:'Go to “Manage Media” to add your content.',
        likes:2,
        liked:0,
        image:'https://static.wixstatic.com/media/84770f_ea85fd5bfc064ad19d6e9385958fe6d7~mv2.jpg/v1/fill/w_960,h_540,fp_0.78_0.27,q_90/84770f_ea85fd5bfc064ad19d6e9385958fe6d7~mv2.webp',
    },
    {   
        title:'I’m an image title',
        text1:'Describe your image here. Use catchy text to tell people the story behind the photo.',
        text2:'Go to “Manage Media” to add your content.',
        likes:0,
        liked:0,
        image:'https://static.wixstatic.com/media/84770f_406382b889904549b0a1e4453533e3d7~mv2.jpg/v1/fill/w_960,h_540,q_90/84770f_406382b889904549b0a1e4453533e3d7~mv2.webp',
    },
    {
        title:'I’m an image title',
        text1:'Describe your image here. Use catchy text to tell people the story behind the photo.',
        text2:'Go to “Manage Media” to add your content.',
        likes:1,
        liked:0,
        image:'https://static.wixstatic.com/media/84770f_e1939662fded4b80b4c63462494cf533~mv2.jpg/v1/fill/w_958,h_540,fp_0.58_0.3,q_90/84770f_e1939662fded4b80b4c63462494cf533~mv2.webp',
    },
    {
        title:'I’m an image title',
        text1:'Describe your image here. Use catchy text to tell people the story behind the photo.',
        text2:'Go to “Manage Media” to add your content.',
        likes:0,
        liked:0,
        image:'https://static.wixstatic.com/media/84770f_92f0f39d1f7141c0b6e7429c66369770~mv2.jpg/v1/fill/w_960,h_540,q_90/84770f_92f0f39d1f7141c0b6e7429c66369770~mv2.webp',
    },
    {
        title:'I’m an image title',
        text1:'Describe your image here. Use catchy text to tell people the story behind the photo.',
        text2:'Go to “Manage Media” to add your content.',
        likes:2,
        liked:0,
        image:'https://static.wixstatic.com/media/84770f_c40bda0193a3419a94962d23757d702e~mv2.jpg/v1/fill/w_960,h_540,q_90/84770f_c40bda0193a3419a94962d23757d702e~mv2.webp',
    },
    {
        title:'I’m an image title',
        text1:'Describe your image here. Use catchy text to tell people the story behind the photo.',
        text2:'Go to “Manage Media” to add your content.',
        likes:0,
        liked:0,
        image:'https://static.wixstatic.com/media/84770f_6bbbe0015dfc43df97a1f6b094fbf7e0~mv2.jpg/v1/fill/w_958,h_540,q_90/84770f_6bbbe0015dfc43df97a1f6b094fbf7e0~mv2.webp',
    }]
    return(
        <div className="Home_section5">
            <div className="Home_section5_gray">
                <h2 className="Home_section5_gray_header">START TRAINING TODAY</h2>
                <Link to='/book_online'
                  onClick={()=>{window.scrollTo({top: 0,behavior: 'smooth'});}}
                  >
                    <button className="Home_section5_gray_btn">Book a Session</button>
                </Link>
            </div>
            <div className="Home_section5_Gallery">
                {Gallery.map(Photo=>(
                    <Section5GalleryFull windowWidth={windowWidth}
                                            Photo={Photo}
                                            setSharePicture={setSharePicture}
                                            Gallery={Gallery}
                                            />
                ))}
                
            </div>
        </div>
    );
}

export default Section5;