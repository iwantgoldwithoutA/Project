import './LogopaymentPost.css';
function LogopaymentPost(props){
    const {payment,onBgClick} = props
    return(
        <div className="Logo-post"> 
            <div className="Logo-post-bg" onClick={onBgClick}/>
            <div className="Logo-post-content">
                <img src={payment.FullUrl}alt=''/> 
            </div>

        </div>
    );
}

export default LogopaymentPost;