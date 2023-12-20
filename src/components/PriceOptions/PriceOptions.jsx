import PriceOption from "../PriceOption/PriceOption";
const cardData = 
   [
      {
        "id": 1,
        "name": "Basic Membership",
        "features": [
          "Access to cardio equipment",
          "Basic weightlifting area",
          "Group fitness classes",
          "Locker room access"
        ],
        "price": 29.99
      },
      {
        "id": 2,
        "name": "Premium Membership",
        "features": [
          "Full access to all equipment",
          "Unlimited group fitness classes",
          "Personalized workout plans",
          "Sauna and steam room access",
          "Towel service"
        ],
        "price": 49.99
      },
      {
        "id": 3,
        "name": "VIP Membership",
        "features": [
          "Priority access to all facilities",
          "24/7 gym access",
          "Personal training sessions",
          "Nutritional counseling",
          "Exclusive members-only events"
        ],
        "price": 79.99
      }
    ]
  
  
const PriceOptions = () => {

   

    return (
        <div className="m-12">
            <h2 className="text-5xl text-center pb-8 font-bold">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                cardData.map(cardData =>
                    <PriceOption

                        key={cardData.id}
                        cardData={cardData}>

                    </PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;