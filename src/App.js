/** @format */

import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const quotes = [
  'У добру је лако добар бити, на муци се познају јунаци!',
  'Ћуд је женска смијешна работа! Не зна жена ко је какве вјере; стотину ће промијенит вјерах да учини што јој срце жуди.',
  'Страх животу каља образ често. Ко на брдо, ак и мало, стоји више види но онај под брдом.',
  'Тврд је орах воћка чудновата, не сломи га, ал’ зубе поломи.',
  'Очи зборе што им вели срце.',
  'Самообмана је убитачна и за људе и за народе.',
  'Свак је рођен да по једном умре, част и брука живе довијека.',
  'Коме закон лежи у топузу, трагови му смрде нечовјештвом.',
  'Вук на овцу своје право има ка тиранин на слаба човјека; ал тирјанству стати ногом за врат, довести га к познанију права, то је људска дужност најсветлија!',
  'Липо, љепо, лепо и лијепо, било, бјело, бело и бијело-листићи су једнога цвијета, у пупољ се један одњихали.',
  'Будале су с очима слепе.',
  'Вјечна зубља вјечне помрчине нит догори нити свјетлост губи.',
  'Чашу меда јошт нико не попи, што је чашом жучи не загрчи; чаша жучи иште чашу меда, смијешане најлакше се пију.',
  'Бич сам божји за тебе исплетен, да се стављаш шта си урадио.',
  'Без муке се песма не испоја, без муке се сабља не сакова.',
  'Благо томе ко довијека живи, имао се рашта и родити.',
  'Нека буде борба непрестана, нека буде што бити не може.',
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: quotes[Math.floor(Math.random() * quotes.length)],
      author: 'Петар II Петровић Његош',
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      quote: quotes[Math.floor(Math.random() * quotes.length)],
    })
  }
  render() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${this.state.quote} - ${this.state.author}`

    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="col-4 box p-4 rounded" id="quote-box">
          <p id="text">
            <i className="fas fa-quote-left fa-2x"></i> <h5>{this.state.quote}</h5>
          </p>
          <cite className="d-block text-end" id="author">
            - {this.state.author}
          </cite>
          <br></br>
          <div className="d-flex justify-content-between">
            <a className="btn btn-primary" id="tweet-quote" target="_blank" href={tweetUrl}>
              <i className="fab fa-twitter"> Твитуј</i>
            </a>
            <button className="btn btn-primary" id="new-quote" onClick={this.handleClick}>
              <i className="fas fa-random"> Насумично</i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
