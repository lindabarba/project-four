import React, {Component} from 'react';
import DrinkBuyForm from '../../components/DrinkBuyForm/DrinkBuyForm';
import './DrinkBuyPage.css';

class DrinkBuyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='DrinkBuyPage'>
        <DrinkBuyPage {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
};

export default DrinkBuyPage;
