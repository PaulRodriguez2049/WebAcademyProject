import React , {useState , useEffect} from 'react';


const Section5GalleryFull=({windowWidth,Photo ,setSharePicture})=>{

    const [like , setLike] = useState(0);

    const HandleLike=()=>{
        if(like===1){
            setLike(0);
            console.log(Photo)
        }else{
            setLike(1);
            console.log(like)
        }
    }

    

    return(
        <div className="Home_section5_Gallery_elements">
                        <div className="Home_section5_Gallery_elements_shades">
                            <h1 className="Home_section5_Gallery_elements_shades_header">I`m an image title</h1>
                            {windowWidth>500 ?(
                                <div className="Home_section5_Gallery_elements_shades_text">
                                     <p className="">
                                        {Photo.text1}
                                    </p>
                                    <p className="">
                                        {Photo.text2}
                                    </p>
                                </div>
                               
                            ):(<p className="Home_section5_Gallery_elements_shades_text">
                            {Photo.text1.slice(0,36)}...
                        </p>)}
                        <div className="Home_section5_Gallery_elements_shades_bottom">
                        <div className="Home_section5_Gallery_elements_shades_likes">
                                <button className={`Home_section5_Gallery_elements_shades_likes_heart ${like ? 'Home_section5_Gallery_elements_shades_likes_heart_liked' : ''}`} 
                                        onClick={HandleLike}
                                        ><i className="fas fa-heart"></i></button>
                                    <h1 className="Home_section5_Gallery_elements_shades_likes_number">{Photo.likes+like>0 ? Photo.likes+like : ''}</h1>
                                </div>
                                <button className="Home_section5_Gallery_elements_shades_bottom_arrow"
                                        onClick={()=>{setSharePicture(true)}}
                                        ><i className="fas fa-reply"></i></button>
                            </div>
                        </div>
                        <img src={Photo.image} alt="" className="Home_section5_Gallery_elements_photos" />
                    </div>
    );
}

export default Section5GalleryFull;