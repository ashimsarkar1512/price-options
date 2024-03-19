import PriceOp from '../PriceOp/PriceOp';


const PriceOptions = () => {

            
                        const PriceOptions= [
                          {
                            "id": 1,
                            "name": "Basic Membership",
                            "features": [
                              "Access to gym facilities",
                              "Standard equipment usage",
                              "Locker access",
                              "Free WiFi",
                              "Fitness assessment"
                            ],
                            "price": 29.99
                          },
                          {
                            "id": 2,
                            "name": "Premium Membership",
                            "features": [
                              "Access to gym facilities",
                              "Premium equipment usage",
                              "Locker access",
                              "Group fitness classes",
                              "Personal training session (1/month)",
                              "Nutritional guidance",
                              "Access to online workout videos"
                            ],
                            "price": 49.99
                          },
                          {
                            "id": 3,
                            "name": "VIP Membership",
                            "features": [
                              "Access to gym facilities",
                              "Premium equipment usage",
                              "Locker access",
                              "Group fitness classes",
                              "Personal training session (2/month)",
                              "Sauna and steam room access",
                              "Towel service",
                              "Priority booking for classes",
                              "Exclusive member events"
                            ],
                            "price": 79.99
                          }
                        ]
                      
                      
            

            return (
                        <div>
                              <h2 className="text-5xl">best prices in the town</h2> 

                             <div className='grid md:grid-cols-3 gap-4 mt-4'>
                             {
                                    PriceOptions.map(option=> <PriceOp key={option.id} option={option}></PriceOp>)
                              }     
                             </div>
                        </div>
            );
            };

export default PriceOptions;