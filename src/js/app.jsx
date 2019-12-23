import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here

constructor(props){
super(props);
this.state ={name: 'balance',
name:'rate',
name:'term',
};
}


  render() {

    return (
      <div className='container'>
      {/* Insert JSX below */}
        <h1>Mortgage Calculator</h1>

      <form className='form-horizontal'>
         <label> Loan Balance </label>
            <input name ='balance' type ='number' placeholder='Loan Balance'/>
            <br></br>

          <label> Rate </label>
            <input name='rate' type ='number' step ='0.01' placeholder='APR %'/>
            <br></br>

         <label>Term </label>
            <select name='term'>
             <option value='15'> 15 </option>
             <option value='30'> 30 </option>
            </select>
          <br></br>

        <button name='submit'> Calculate </button>

          <div name ='output' id='output'></div>
        </form>
      </div>
    );
  }





}






