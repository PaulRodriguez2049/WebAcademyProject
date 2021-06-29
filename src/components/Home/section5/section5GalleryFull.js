import React , {useState , useEffect} from 'react';
import PictureViewer from './PictureViewer';


const Section5GalleryFull=({windowWidth,Photo ,setSharePicture,Gallery})=>{

    const [like , setLike] = useState(0);
    const [pictureViewer , setPictureViewer]=useState(false);
    const [index, setIndex]=useState(0)

    const HandleLike=()=>{
        if(like===1){
            setLike(0);
            Photo.liked=false;
        }else{
            setLike(1);
            Photo.liked=true;
        }
    }

    

    return(
        <div className="Home_section5_Gallery_elements">
            {pictureViewer ? (<PictureViewer setPictureViewer={setPictureViewer} 
                                            index={index} 
                                            Gallery={Gallery}
                                            setSharePicture={setSharePicture}
                                            />) : ('')}
            <div className="Home_section5_Gallery_elements_shades">
                <h1 className="Home_section5_Gallery_elements_shades_header"
                    onClick={()=>{setPictureViewer(true) ; setIndex(Gallery.indexOf(Photo)) }}
                    >{Photo.title}</h1>
                    {windowWidth>500 ?(
                    <div className="Home_section5_Gallery_elements_shades_text"
                        onClick={()=>{setPictureViewer(true) ; setIndex(Gallery.indexOf(Photo))}}>
                        <p className="">
                            {Photo.text1}
                        </p>
                        <p className="">
                            {Photo.text2}
                        </p>
                    </div>
                ):(<p className="Home_section5_Gallery_elements_shades_text"
                        onClick={()=>{setPictureViewer(true) ; setIndex(Gallery.indexOf(Photo))}}
                        >
                    {Photo.text1.slice(0,36)}...
                    </p>)}
                    <div className="Home_section5_Gallery_elements_shades_bottom">
                        <div className="Home_section5_Gallery_elements_shades_likes">
                            <button className={`Home_section5_Gallery_elements_shades_likes_heart ${Photo.liked ? 'Home_section5_Gallery_elements_shades_likes_heart_liked' : ''}`} 
                                    onClick={HandleLike}
                                    ><i className="fas fa-heart"></i></button>
                            <h1 className="Home_section5_Gallery_elements_shades_likes_number">{Photo.likes+Photo.liked>0 ? Photo.likes+Photo.liked : ''}</h1>
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