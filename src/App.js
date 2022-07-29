import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';
import Highcharts, { Series } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Footer from './components/footer';



  //chart: {
     // type: 'column'
  //},

  //title: {
      //text: 'Your products'
 // },
//
  //xAxis: {
     /// categories: ['Keyboard', 'Xiaomi', 'Nokia', 'Lap tob']
  //},

  //yAxis: {
      //allowDecimals: false,
      //min: 0,
      //title: {
          //text: 'Number of products'
     // }
  //},

 // tooltip: {
      //formatter: function () {
          //return '<b>' + this.x + '</b><br/>' +
              //this.series.name + ': ' + this.y + '<br/>' +
              //'Total: ' + this.point.stackTotal;
     // }
 // },

  //plotOptions: {
     // column: {
      //    stacking: 'normal'
     // }
  //},

  //series: [{
      //name: 'Your products',
      //
      
 // }, ]
//};

class App extends Component {
  state = {
    chart: {
           type: 'column'
       },
       xAxis: {
         categories: ['Lap tob', 'Iphone', 'Televisions', 'Samsung A12']
     },
     title: {
      text: 'Your products'
 },
 yAxis: {
  allowDecimals: false,
  min: 0,
  title: {
      text: 'Number of products'
  }
},
tooltip: {
   formatter: function () {
      return '<b>' + this.x + '</b><br/>' +
           this.series.name + ': ' + this.y + '<br/>' +
          'Total: ' + this.point.stackTotal;
   }
  },
plotOptions: {
  //pie: {
    //allowPointSelect: true,},
  column: {
     stacking: 'normal'
   }
},
    series: 
    [{ name: 'Your Product',
      data: [] }],
    
    counters:[]
    
    
    
  }

  

  handleInc = counter => {
    console.log(counter)
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].number++;
    this.setState({ counters })
    // var co=this.state.count
    // var c=  co>=10 ? co : co+1
    // this.setState( { count:c } )
  }
  handleDec = (counter) => {
    console.log(counter)
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].number--;
    this.setState({ counters })
  }
  //*(show datas in table)*\\
   //TableData() {
    //const [data, getData] = useState([])
    //const URL = 'http://127.0.0.1:8000/counterss';
 
    //useEffect(() => {
       // fetchData()
    //}, [])
 
 
    //const fetchData = () => {
        //fetch(URL)
          //  .then((res) =>
            //    res.json())
 
            //.then((response) => {
              //  console.log(response);
                //getData(response);
            //})
            
 
 //   }
 
   // return (
     //   <>
            
       //     <tbody>
         //       <tr>
           //         <th>name</th>
             //       <th>Id</th>
               //     <th>count</th>
                    
                //</tr>
                //{data.map((item, i) => (
                  //  <tr>
                    //    <td>{item.value}</td>
                      // <td>{item.count}</td> 
                       //////////////////<td>{item.id}</td> 
                        
                  //  </tr>
                //))}
            //</tbody>
 
        //</>
    //);
//}

  componentDidMount() {


   fetch("http://127.0.0.1:8000/counterss/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({  series: [{ data: result.hc }],counters: result.cn})
//
          console.log(result.cn)
          console.log(result.hc)
        },
        (eror) => {
        }//*in the fetch paranthes you should write your request ip*\\
      )
}

  handleDelete = (counterId) => {
    // console.log('handle delete is runing',counterId)
    const counters = this.state.counters.filter(c => c.id != counterId)
    this.setState({ counters })
  }

  render() {

    return (<div className="text-center">
      
        <NavBar 
       p={this.state.counters.length}/> 
     
       
                                       
      <Counters nxc={this.state.counters}
        counter={this.state.counters}
        del={this.handleDelete}
        in={this.handleInc}
        de={this.handleDec} 
        
        />  
        <table class="table" >
  <thead>
    <tr class="bg-primary">
      <th scope="col"><font face="Comic sans MS">Name</font></th>
      <th scope="col"><font face="Comic sans MS">Number</font></th>
      
    </tr>
  </thead>
  <tbody>
     {this.state.counters.map(c=>
    <tr class="bg-primary">
      <td class="bg-warning"><font face="Comic sans MS"><span>{c.name}</span></font></td>
      <td class="bg-warning"><font face="Comic sans MS"><span>{c.number}</span></font></td>
    </tr>)} 
  </tbody>
</table>
 <span className={this.nry()}><font face="Comic sans MS">{this.nrt()}</font></span> 

<HighchartsReact highcharts={Highcharts} options={this.state}/>   

<Footer/>
       
    </div>);
    
  }
   nrt(){
     return this.state.counters.length ===0 ? "No Any Thing To Buy" : this.state.counters.length   +   " Products" + " To Buy"  
   }
   nry(){
 return this.state.counters.length ===0 ? 'btn btn-primary' : 'btn btn-success m-2'
   }


}

export default App;
