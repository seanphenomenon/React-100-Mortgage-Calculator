import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props)

    this.state = {
      balance: '',
      rate: '',
      term: 15,
      monthlyPayment: '0',
    }

    this.handleBalanceChange = this.handleBalanceChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);


  }

  handleOnClick(event) {

    const rateConversion = this.state.rate / 100 / 12;

    const monthlyRate = this.state.rate / 100 / 12 + 1;

    const totalMonthlyPayments = this.state.term * 12;

    const mortgageConversion = 1 - Math.pow(monthlyRate, -totalMonthlyPayments);

    const monthlyMortgagePayment = (rateConversion / mortgageConversion * this.state.balance).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    this.setState({
      monthlyPayment: monthlyMortgagePayment
    })

    event.preventDefault();
  }


  handleBalanceChange(event) {
    this.setState({
      balance: event.target.value
    });
  }

  handleRateChange(event) {
    this.setState({
      rate: event.target.value
    });
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }


  render() {
    // console.log (this.state.balance,this.state.rate,this.state.term)

    return (
      <div className='container'>
        {/* Insert JSX below */}
        <h3 className=" display-4 mt-4 mb-5">Mortgage Calculator</h3>
        <div className='row d-flex justify-content-center'>
        <form>
          <div className='form-group'>
          <label className='lead'>Loan Balance:</label>
          <div className='input-group mb-3'>
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input name='balance' type='text' className='form-control' value={this.state.balance} onChange={this.handleBalanceChange} />
          </div>
          </div>
          <label className='lead'> Annual Interest Rate:</label>
          <div className='input-group mb-3'>
            <div className="input-group-prepend">
              <span className="input-group-text">%</span>
            </div>
            <input name='rate' type='text' className='form-control' step='1.0' value={this.state.rate} onChange={this.handleRateChange} />
          </div>
          <div className='form-group'>
            <label className='lead'>Loan Term:</label>
            <select className='form-control' name='term' value={this.state.term} onChange={this.handleTermChange}>
              <option value=''></option>
              <option value='15'>15 years</option>
              <option value='30'>30 years</option>
            </select>
          </div>
          <button className='btn btn-dark btn-lg btn-block' type='button' name='submit' onClick={this.handleOnClick} > Calculate </button>
          </form>
        </div>
          <br></br>
          <br></br>

          <div className='lead' name='output' id='output' value={this.state.monthlyPayment}> Your estimated monthly payment is ${this.state.monthlyPayment}.</div>
        </div>

    );
  }
}
