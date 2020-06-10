import React,{Component} from 'react';

class App extends Component {
 state={
   loading:true,
   person:null,

 }

 async componentDidMount(){
    const url = 'https://api.randomuser.me/'
    const response = await fetch(url);
    const data = await response.json()
    this.setState({person:data.results[0],loading:false})


  }
  render(){
  return (
    <div className="App conatainer">
     {this.state.loading || !this.state.person ? (<div>loading...</div>):(
     <div>
       <div> {this.state.person.name.first} </div>
       <div> {this.state.person.name.last} </div>
       <div> {this.state.person.name.title} </div>
       <img alt='random' src={this.state.person.picture.large} />

</div>

     )}
    </div>
  );
}}

export default App;
