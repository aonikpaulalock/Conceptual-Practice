import ReactModal from "../Modal/ReactModal";

const Product = (props) => {
  const {cartCount} = props;
  const {title,image,price} = props.product;
  return (
    <div className='col-md-4'>
      <div className='shadow p-3 rounded'>
      <img src={image} alt="" className='w-50 img-fluid' />
       <h2 className='fw-bold text-success pt-3'>{title.slice(0,9)}</h2>
       <h3 className='text-warning fw-bold py-2'> $ {price}</h3>
       <div className='d-flex justify-content-around fw-bold py-3'>
        <button className='btn btn-outline-warning' onClick={cartCount}>Add Cart</button>
        <button className='btn btn-outline-danger'>Delete</button>
        {/* <button className='btn btn-outline-success'>Details</button> */}
        <ReactModal product={props.product}></ReactModal>
       </div>
      </div>
    </div>
  );
};

export default Product;