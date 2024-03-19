import { BarChart as BChart, XAxis,YAxis,CartesianGrid,Tooltip,Bar} from 'recharts';
const BarChart = () => {

            const data = [
                        {
                          name: 'Page H',
                          uv: 3000,
                          pv: 5000,
                          amt: 2000,
                        },
                        {
                          name: 'Page I',
                          uv: 4000,
                          pv: 3000,
                          amt: 1500,
                        },
                        {
                          name: 'Page J',
                          uv: 5000,
                          pv: 2000,
                          amt: 1000,
                        },
                        {
                          name: 'Page K',
                          uv: 2000,
                          pv: 4000,
                          amt: 3000,
                        },
                        {
                          name: 'Page L',
                          uv: 6000,
                          pv: 1000,
                          amt: 500,
                        },
                        {
                          name: 'Page M',
                          uv: 1000,
                          pv: 6000,
                          amt: 4000,
                        },
                        {
                          name: 'Page N',
                          uv: 7000,
                          pv: 7000,
                          amt: 7000,
                        },
                      ];
                      
            
                      
            return (
                        <div>
                                    <BChart width={800} height={400} data={data}>
                                               <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                                                <XAxis dataKey="name"></XAxis>
                                                <YAxis dataKey="pv"></YAxis>
                                                <Tooltip></Tooltip>
                                                <Bar dataKey="pv" fill="#8884d8" />
                                                 <Bar dataKey="uv" fill="#82ca9d" />

                                    </BChart>
                                    
                        </div>
            );
};

export default BarChart;