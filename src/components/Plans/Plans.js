import React , {useEffect , useState} from 'react';
import MemberShip from './MemberShip';
import CheckOut from './CheckOut'
import './styles/Plans.css'

const Plans=({setBlackScreenOpen , setLogIn})=>{
    const[showBest , setShowBest]=useState(true);
    const [checkout , setCheckout]=useState(false);
    const [priceState , setPrice]=useState('');
    const [nameState , setName]=useState('');
    const [durationState , setDuration]=useState('');
    const [payplanState , setpayplan]=useState('');

    const Memberships=[{
        bestValue:false,
        name:'Silver Membership',
        price:30,
        payplan:'Total',
        monthly:'',
        duration:'1 month',
        descr:'Short-term trial for beginners',
        validity:'Valid for one month',
        text:['Unlimited classes','Fitness assessment','Locker room with showers']
    },
    {
        bestValue:true,
        name:'Gold Membership',
        price:25,
        payplan:'Billed monthly for 12 months',
        monthly:'Every Month',
        duration:'12 months',
        descr:'Ideal for advanced trainers',
        validity:'Valid for 12 months',
        text:['Unlimited classes','Fitness assessment','Locker room with showers' ,'Free parking']
    },
    {
        bestValue:false,
        name:'Platinum Membership',
        price:40,
        payplan:'Billed monthly',
        monthly:'Every Month',
        duration:'Until Canceled',
        descr:'Perfect for committed trainers',
        validity:'',
        text:['Unlimited classes','Fitness assessment','Locker room with showers','Free parking','Guest privileges']
    }]
   
    return(
        <div className="Plans">
            <div className="Plans_header">PLANS & PRICING</div>
             {checkout ? (
                <CheckOut  price={priceState}
                            name={nameState}
                            duration={durationState}
                            payplan={payplanState}
                            setBlackScreenOpen={setBlackScreenOpen}
                            setLogIn={setLogIn}
                            />
             ) : (
                 <div className={`Plans_Membersips ${showBest ? ('Plans_Membersips_showBest'):('Plans_Membersips_hideBest')}`}>
                    { Memberships.map(Membership=>(
                        <MemberShip bestValue={Membership.bestValue}
                                    name={Membership.name} 
                                    price={Membership.price}
                                    payplan={Membership.payplan}
                                    monthly={Membership.monthly}
                                    duration={Membership.duration}
                                    descr={Membership.descr}
                                    validity={Membership.validity}
                                    text={Membership.text}
                                    showBest={showBest}
                                    setShowBest={setShowBest}
                                    setCheckout={setCheckout}
                                    setPrice={setPrice}
                                    setName={setName}
                                    setDuration={setDuration}
                                    setpayplan={setpayplan}
                                    />
                     ))}
                </div>
             )}
            
        </div>
    );
}
export default Plans;