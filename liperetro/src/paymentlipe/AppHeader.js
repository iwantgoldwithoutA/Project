import { useLocation } from 'react-router-dom';


function AppHeader() { 



    const locate = useLocation();
    const {book} = locate.state
    console.log(book)
    return(
        <>
        <div className="app-header">
            <h4>PAYMENT ช่องทางการจ่ายเงิน</h4>
            <br/>
            <h4> {book.Prices} Bath</h4>

           
        </div>
        
        </>
    );
}
export default AppHeader; 