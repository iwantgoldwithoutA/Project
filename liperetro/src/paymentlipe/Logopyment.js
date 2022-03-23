function Logopyment(props){ 
    const {payment,onpaymentClick}=props
    return(
        <div className="logo-pyment"> 
        <img src={payment.thumbnailUrl} onClick={()=>{onpaymentClick(payment)}}alt =''/>
        <h4 className="payment-title">{payment.title}</h4>
    </div> 
    );
} 
export default Logopyment; 
