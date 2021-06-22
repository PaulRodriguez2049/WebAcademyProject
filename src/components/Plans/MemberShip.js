import React,{useState , useEffect} from "react";

const MemberShip=({bestValue,name,price,payplan,monthly,duration,descr,validity ,text,showBest , setShowBest ,setCheckout,setPrice,setName,setDuration,setpayplan})=>{

   
    const[show , setShow]=useState(true);//show show button under select btn
    

    useEffect(()=>{if(bestValue){
        setShow(false)
    }},[bestValue])
    
    const Buy=()=>{
        setCheckout(true);
        setPrice(price);
        setName(name);
        setDuration(duration);
        setpayplan(payplan);
        
    }

    const showBestToggle=()=>{
        if(show){
            setShow(false)
            if(bestValue){
                setShowBest(true)
                console.log(showBest)
            }
        }else{
            setShow(true)
            if(bestValue){
                setShowBest(false)
                console.log(showBest)
            }
        }
    }
    
    
    return(
        <div className={`Plans_Membersip_absolute ${bestValue ? 'Membersip_absolute':''}`}>
            {bestValue ? (<h1 className="Plans_Membersip_best">Best Value</h1>) :''}
             <div className={`Plans_Membersip ${bestValue? 'Plans_best':''} ${!show? 'Plans_Membersip_increase' : '  Plans_Membersip_decrease'}`}>
                        <h1 className="Plans_Membersip_name">{name}</h1>
                        <div className="Plans_Membersip_price">
                            <h1 className="Plans_Membersip_price_denom">$</h1>
                            <h1 className="Plans_Membersip_price_number">{price}</h1>
                        </div>
                        <h1 className="Plans_Membersip_monthly">{monthly}</h1>
                        <h1 className="Plans_Membersip_description">{descr}</h1>
                        <h1 className="Plans_Membersip_validity">{validity}</h1>
                        <button className="Plans_Membersip_btn"
                                onClick={Buy}
                                >Select</button>
                        {show ? (<button className="Plans_Membership_bottom_arrow_show"
                                onClick={showBestToggle }
                                ><i class="fas fa-chevron-down"></i></button>):('')}
                        <div className={`Plans_Membersip_bottom_absolute  ${show? '':'Plans_Membersip_bottom_absolute_show'} `}>
                        
                            <div className={`Plans_Membersip_bottom  ${bestValue? 'Plans_Membersip_bottom_best':''}`}>
                                {text.map((line)=>(
                                    <h1 className="Plans_Membersip_bottom_text">{line}</h1>
                                ))}
                                {!show ?(<button className="Plans_Membership_bottom_arrow_hide"
                                        onClick={showBestToggle }
                                        ><i className="fas fa-chevron-up"></i></button>) : ('')}
                            </div> 
                        </div>
                    </div>
                  
               
        </div>

    );
}
export default MemberShip;