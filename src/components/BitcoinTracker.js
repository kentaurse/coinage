import React, { Component } from 'react';
import CoinList from './CoinList';
import ControlPanel from './ControlPanel';
import { getPrice } from '../getCoins';

class BitcoinTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [
        { id: 0, code: '...', name: "Loading", price: 0 },
      ],
      currDollar: true,
      altCoins: [
        { id: 0, code: 'BTC',  name: 'Bitcoin',  showing: true   },
        { id: 1, code: 'XRP',  name: 'Ripple',   showing: true   },
        { id: 2, code: 'LTC',  name: 'Litecoin', showing: true   },
        { id: 3, code: 'ETH',  name: 'Etherium', showing: true   },
        { id: 4, code: 'DOGE', name: 'Dogecoin', showing: true   },
        { id: 5, code: 'XMR',  name: 'Monero',   showing: true   },
        { id: 6, code: 'ZEC',  name: 'Zcash',    showing: false  },
        { id: 7, code: 'DSH',  name: 'Dash',     showing: false  },
        { id: 8, code: 'NEO',  name: 'NEO',      showing: false  },
        { id: 9, code: 'GNT',  name: 'Golem',    showing: false  }
      ]
    }
    this.updateCoins = this.updateCoins.bind(this);
  }

  async updateCoins() {
    const filtered = this.state.altCoins.filter(a => a.showing);
    
    const codes = filtered.map(c => c.code);
    
    const prices = await getPrice(codes);

    const coins = filtered.map(c => {
      return {...c, price: prices[c.code]};
    })

    this.setState({coins});
  }

  componentDidMount() {
    this.updateCoins()
  }

  render() {
    return (
      <div className="container">
        <h1>coinage</h1>
        <CoinList 
          coinData={this.state.coins}
          currDollar={this.state.currDollar}
        />
        <ControlPanel 
          handleRefresh={this.updateCoins} 
          handleCurrency={() => this.setState({
            currDollar: !this.state.currDollar}
          )} 
        />
      </div>
    )
  }
}

export default BitcoinTracker;