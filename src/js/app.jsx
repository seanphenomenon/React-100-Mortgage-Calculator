import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props){
    super(props)

    this.state = {
      balance: '',
      rate: '',
      term: 15,
      monthlyPayment:'0',
    }

    this.handleBalanceChange = this.handleBalanceChange.bind(this)
    this.handleRateChange = this.handleRateChange.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)


  }

     handleOnClick (event){
      //  console.log('this button was clicked')

      const rateConversion = this.state.rate/100/12

      // console.log(rateConversion)

      const monthlyRate = this.state.rate/100/12 + 1

      // console.log(monthlyRate)

      const totalMonthlyPayments = this.state.term * 12

      // console.log(totalMonthlyPayments)

      const mortgageConversion = 1 - Math.pow(monthlyRate,-totalMonthlyPayments)

      // console.log (mortgageConversion)

      const monthlyMortgagePayment = (rateConversion /mortgageConversion * this.state.balance).toFixed(2)
      // console.log(monthlyMortgagePayment)

      this.setState ({
      monthlyPayment: monthlyMortgagePayment})

      event.preventDefault();
    }



  handleBalanceChange (event){
      this.setState({
        balance: event.target.value
      })
    }

  handleRateChange (event){
    this.setState({
      rate: event.target.value
    })
  }

  handleTermChange (event){
    this.setState({
      term: event.target.value
    })
  }


    render() {
        // console.log (this.state.balance,this.state.rate,this.state.term)

      return (
          <div className='container'>
          {/* Insert JSX below */}
            <h3>Mortgage Calculator</h3>

           <form className='form-horizontal' onSubmit={this.handleSubmit}>
             <label> Loan Balance: </label>
                <input name ='balance' type ='number'  placeholder='Loan Balance' value={this.state.balance} onChange={this.handleBalanceChange}/>
                <br></br>

               <label> Rate: </label>
                <input name='rate' type ='number' step ='0.01' placeholder='APR %'value ={this.state.rate} onChange={this.handleRateChange}/>
                <br></br>

              <label>Term: </label>
                <select name='term' value={this.state.term} onChange={this.handleTermChange}>
                 <option value =''></option>
                 <option value='15'> 15 </option>
                 <option value='30'> 30 </option>
                </select>
                <br></br>

            <button name='submit' onClick={this.handleOnClick} > Calculate </button>
              <br></br>
              <br></br>

            <div name ='output' id='output' value={this.state.monthlyPayment}>${this.state.monthlyPayment} is your monthly payment.</div>
            </form>
          </div>
      );
    }
}
