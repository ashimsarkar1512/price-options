import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';
const LineChart = () => {

          const  students =[
                        {id: 1, name: "Student 1", math: 85, physics: 90, chemistry: 80},
                        {id: 1, name: "Student 1", math: 85, physics: 90, chemistry: 80},
                        {id: 2, name: "Student 2", math: 78, physics: 85, chemistry: 75},
                        {id: 3, name: "Student 3", math: 92, physics: 95, chemistry: 88},
                        {id: 4, name: "Student 4", math: 65, physics: 70, chemistry: 62},
                        {id: 5, name: "Student 5", math: 71, physics: 75, chemistry: 68},
                        {id: 6, name: "Student 6", math: 89, physics: 92, chemistry: 85},
                        {id: 7, name: "Student 7", math: 77, physics: 82, chemistry: 78},
                        {id: 8, name: "Student 8", math: 83, physics: 88, chemistry: 80},
                        {id: 9, name: "Student 9", math: 94, physics: 96, chemistry: 92},
                        {id: 10, name: "Student 10", math: 70, physics: 75, chemistry: 68}
                      
              ]  
                      
            return (
                        <div>
                           <LChart  width={800} height={400} data={students}>
                                    <XAxis dataKey='name'></XAxis>
                                    <YAxis></YAxis>
                                     <Line dataKey="math" stroke='red'></Line> 
                                    <Line dataKey={'physics'}></Line> 
                                    </LChart> 
                                   


                        </div>
            );
            };

export default LineChart;