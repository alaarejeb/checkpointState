import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Alaa Rejeb',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
        profession: 'webdevelloper',
      },
      show: false,
      mountTime: 0,
    };
  }

  componentDidMount() {
    // this.setState({ mountTime: new Date() });
   setInterval(() => {
    this.setState({mountTime:this.state.mountTime+1})
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div>
        <h1>Click on the button</h1>
        <button onClick={this.toggleShow}>toggle</button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
            <img src={person.imgSrc} alt="Person" />

            <p>Time: {this.state.mountTime}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
