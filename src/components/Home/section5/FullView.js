import React , {useState , useEffect} from 'react';
import '../styles/section5_FullView.css'

const FullView=({Gallery,setOpenFullView,setPictureViewer,HandleLeftArrow,HandleRightArrow,GalleryIndex})=>{

    return(
        <div className="FullView">
                <button className="PictureViewer_container_picture_btn FullView_arrow_left"
                            onClick={HandleLeftArrow}
                        ><i className="fas fa-chevron-left"></i></button>
                <img src={Gallery[GalleryIndex].image} alt="" className="FullView_img" />
                <button className="PictureViewer_escape FullView_Escape"
                    onClick={()=>{setOpenFullView(false); setPictureViewer(false) }}
                ><i className="fas fa-times"></i> </button>
                <button className="FullView_scaleDown"
                        onClick={()=>{setOpenFullView(false)}}
                        ><span className="highRes"><i className="fas fa-compress-alt"></i></span><span className="lowRes"><i className="fas fa-times"></i></span></button>
                <button className="PictureViewer_container_picture_btn FullView_arrow_right"
                            onClick={HandleRightArrow}
                            ><i className="fas fa-chevron-right"></i></button>            
        </div>
    );
}

export default FullView;