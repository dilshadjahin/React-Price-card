
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({ cardData }) => {
    const { name, price, features } = cardData
    return (
        <div className='bg-blue-500 rounded-md p-4 text-white flex flex-col'>
            <h2 className='text-center'>
                <span className="text-7xl font-extrabold"> {price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>
                {name}

            </h4>

           <div className='p-6 flex-grow'>
           {
                features.map((feature, index) =>
                    <Feature
                        key={index}
                        feature={feature} >
                    </Feature>)
            }

           </div>

           <button className='mt-12 bg-blue-900 text-white font-bold rounded-lg w-full py-3 hover:bg-blue-700'>
            Buy Now
            </button>

        </div>
    );
};
PriceOption.propTypes = {
    cardData: PropTypes.object
}
export default PriceOption;