
import './Menubar.css'
const Menubar = (props) => {
  return (
    <div className="container-fluid bg-success">
      <div className="row text-warning">
        <div className="col-md-4 fw-bold p-3 fs-4 justify-content-center align-items-center">
        Logo
      </div>
   <div className="col-md-8">
        <div className='d-flex p-4 item justify-content-center align-items-center'>
        <li className=''>Home</li>
         <li>About</li>
         <li>Product</li>
         <li>Cart <sup>{props.count}</sup></li>
         <li>Contact</li>
        </div>
       </div>
      </div>
    </div>
  );
};
export default Menubar;
