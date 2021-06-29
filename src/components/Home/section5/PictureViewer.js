import React , {useState , useEffect} from 'react';
import '../styles/Home_section5_PictureViewer.css'
import FullView from './FullView'

const PictureViewer=({setPictureViewer,index,Gallery,setSharePicture})=>{

    const [GalleryIndex , setGalleryIndex]=useState(index);
    const[like , setlike]=useState(0)
    const[openFullView,setOpenFullView]=useState(false)

    const HandleLeftArrow =()=>{
        if(GalleryIndex<=0){
            setGalleryIndex(Gallery.length-1)
        }else{
            setGalleryIndex(GalleryIndex-1) 
        }
        setlike(0)
    }
    const HandleRightArrow =()=>{
        if(GalleryIndex>=Gallery.length-1){
            setGalleryIndex(0)
            console.log(GalleryIndex,Gallery.length)
        }else{
            setGalleryIndex(GalleryIndex+1) 
            console.log(GalleryIndex,Gallery.length)
        }
        setlike(0)
    }

   const Expand=()=>{
        setOpenFullView(true)
   }
   const HandleLike=()=>{
    if(Gallery[GalleryIndex].liked===1){
        Gallery[GalleryIndex].liked=0;
        setlike(0)
    }else{
        Gallery[GalleryIndex].liked=1;
        setlike(1)
    }
}


    return(
        <div className="PictureViewer">
            {openFullView ? 
            (<FullView Gallery={Gallery}
                        GalleryIndex ={GalleryIndex }
                        setOpenFullView={setOpenFullView}
                        setPictureViewer={setPictureViewer}
                        HandleLeftArrow={HandleLeftArrow}
                        HandleRightArrow={HandleRightArrow}
                        /> ):('')}
            <button className="PictureViewer_escape"
                onClick={()=>{setPictureViewer(false) ; setlike(0) }}
                ><i className="fas fa-times"></i> <span><i className="fas fa-arrow-left"></i></span></button>
            <div className="PictureViewer_button">
            <div className="Home_section5_Gallery_elements_shades_likes">
                        <button className={`PictureViewer_button_btn ${Gallery[GalleryIndex].liked || like ? 'red' : ''}`} 
                                onClick={HandleLike}
                                ><i className="fas fa-heart"></i></button>
                        <h1 className="Home_section5_Gallery_elements_shades_likes_number">{Gallery[GalleryIndex].likes+Gallery[GalleryIndex].liked ? Gallery[GalleryIndex].likes+Gallery[GalleryIndex].liked : ''}</h1>
                    </div>
                <button className="PictureViewer_button_btn"
                        onClick={()=>{setSharePicture(true)}}><i class="fas fa-reply"></i></button>
            </div>
            <div className="PictureViewer_container">
                <div className="PictureViewer_container_picture">
                <button className="PictureViewer_expand"
                        onClick={Expand}
                ><i className="fas fa-expand-alt"></i></button>
                    <button className="PictureViewer_container_picture_btn"
                            onClick={HandleLeftArrow}
                            ><i className="fas fa-chevron-left"></i></button>
                    <img src={Gallery[GalleryIndex].image} alt="" className="PictureViewer_conainer_picture_img" />
                    <button className="PictureViewer_container_picture_btn"
                            onClick={HandleRightArrow}
                            ><i className="fas fa-chevron-right"></i></button>
                </div>
                <div className="PictureViewer_container_text">
                    <h1 className="PictureViewer_container_text_header">{Gallery[GalleryIndex].title}</h1>
                    <h1 className="PictureViewer_container_text_paragraph">{Gallery[GalleryIndex].text1}</h1>
                    <h1 className="PictureViewer_container_text_paragraph">{Gallery[GalleryIndex].text2}</h1>
                </div>
            </div>
        </div>
    );
}

export default PictureViewer;