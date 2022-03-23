import Videoslide from './Vidslide';
import Home from './home/Home';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Package from './package/package';
import Login from './Login/login';
import Register from './register/register';
import Payment from './paymentlipe/payment';
import Upload from './upload/upload';
import SubmitPayment from './submitpayment/submitpayment';
import Review from './Review/review';
import PackageChoose from './programtour/PackageChoosing';
import Statuspackage from './status/statuspackage';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Videoslide/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/package' element={<Package/>}/>
        <Route path='/packageChoose/:id' element={<PackageChoose/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/submitpayment' element={<SubmitPayment/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/status' element={<Statuspackage/>}/> 
      </Routes>
    </Router>
  )
}
    

export default App;
