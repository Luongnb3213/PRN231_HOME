import { useEffect, useState } from 'react';
import SellerDetail from './SellerDetail';
import { useSelector } from 'react-redux';
import requestAPI from '../../../customHook/callApi';
import LoadingComponent from '../../../Components/LoadingComponent';
const MyProducts = () => {
  const [currentBtn, setCurrentBtn] = useState('selling');
  const user = useSelector((state) => state.user.user);
  const [isLoading, setIsLoading] = useState(false);
  const [dataProduct, setDataProduct] = useState([]);
  const handleChange = (status) => {
    setCurrentBtn((prev) => status);
  };
  useEffect(() => {
    const fetch = async () => {
      if(user){
        try {
          setIsLoading(true);
       
          let url =  `/prn-product/get-product-buy-now-seller?sellerId=${user?.account_id}`
          if ( currentBtn === "selling") {
           url =  `/prn-product/get-product-buy-now-seller?sellerId=${user?.account_id}`
             
          }else{
           url =  `/prn-product/get-product-bid-seller?sellerId=${user?.account_id}`
  
          }
          const data = await requestAPI(
            'Get',
            url
          );
          setDataProduct(data.response);
        } finally {
          setIsLoading(false);
        }
      }
   
    };

    fetch();
  }, [currentBtn, user]);

  let classNav =
    'w-[32rem] h-12 flex items-center justify-center rounded-lg cursor-pointer hover:opacity-90 transition-all';
  let active = 'bg-blue-500 text-white';
  return (
    <div className="bg-stone-200 rounded-md w-full">
      <div className="flex w-full justify-center items-center mb-4">
        <div
          className={`${classNav} ${currentBtn === 'selling' ? active : ''}`}
          onClick={() => handleChange('selling')}
        >
          Selling
        </div>
        <div
          className={`${classNav} ${currentBtn === 'bidding' ? active : ''}`}
          onClick={() => handleChange('bidding')}
        >
          Bidding
        </div>
      </div>

      {dataProduct.length ? (
        <>
          {dataProduct.map((product,index) => {
            return <SellerDetail key={index} item={product} />;
          })}
        </>
      ) : (
        <div className='px-5'>No Products</div>
      )}
      {isLoading && <LoadingComponent />}
    </div>
  );
};

export default MyProducts;
