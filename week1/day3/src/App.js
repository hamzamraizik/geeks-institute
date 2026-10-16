import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import './styles.css';

class BuggyCounter extends React.Component {
  state = { counter: 0 };

  handleClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    if (this.state.counter >= 5) {
      throw new Error('I crashed!');
    }
    return <button onClick={this.handleClick}>Click me: {this.state.counter}</button>;
  }
}

class MiniProjectRight extends React.Component {
  state = { message: 'This text is working fine.' };

  replaceText = () => {
    this.setState({ message: { function: 'I live to crash' } });
  };

  render() {
    return (
      <div className="panel">
        <h3>Right column</h3>
        <p>Try the error boundary with the button below.</p>
        <ErrorBoundary key={this.props.resetKey}>
          <p>{this.state.message}</p>
          <button onClick={this.replaceText}>Replace string with object</button>
        </ErrorBoundary>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    window.alert('The child component was unmounted.');
  }

  render() {
    return <h3>Hello World!</h3>;
  }
}

class LifecycleDemo extends React.Component {
  state = { favoriteColor: 'red', show: true };

  componentDidMount() {
    this.colorTimer = setTimeout(() => this.setState({ favoriteColor: 'yellow' }), 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.colorTimer);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('after update');
  }

  changeColor = () => this.setState({ favoriteColor: 'blue' });
  hideChild = () => this.setState({ show: false });

  render() {
    return (
      <div className="panel">
        <h3>Lifecycle</h3>
        <p>My favorite color is {this.state.favoriteColor}</p>
        <button onClick={this.changeColor}>Change color to blue</button>
        {this.state.show && <Child />}
        {this.state.show && <button onClick={this.hideChild}>Delete</button>}
      </div>
    );
  }
}

class FormComponent extends React.Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <form action="/" method="get" className="form-grid">
        <label>First name <input name="firstName" value={values.firstName} onChange={handleChange} /></label>
        <label>Last name <input name="lastName" value={values.lastName} onChange={handleChange} /></label>
        <label>Age <input name="age" type="number" value={values.age} onChange={handleChange} /></label>
        <fieldset>
          <legend>Gender</legend>
          <label><input type="radio" name="gender" value="male" checked={values.gender === 'male'} onChange={handleChange} /> Male</label>
          <label><input type="radio" name="gender" value="female" checked={values.gender === 'female'} onChange={handleChange} /> Female</label>
        </fieldset>
        <label>Destination
          <select name="destination" value={values.destination} onChange={handleChange}>
            <option value="Japan">Japan</option>
            <option value="France">France</option>
            <option value="Brazil">Brazil</option>
          </select>
        </label>
        <label><input type="checkbox" name="lactoseFree" checked={values.lactoseFree} onChange={handleChange} /> Lactose free</label>
        <button type="submit">Submit form</button>
      </form>
    );
  }
}

class FormContainer extends React.Component {
  state = {
    firstName: 'John',
    lastName: 'Doe',
    age: '25',
    gender: 'male',
    destination: 'Japan',
    lactoseFree: false,
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? (checked ? true : false) : value;
    this.setState({ [name]: newValue });
  };

  render() {
    return <FormComponent values={this.state} handleChange={this.handleChange} />;
  }
}

class Modal extends React.Component {
  render() {
    return (
      <div className="modal-background">
        <div className="modal-body">
          <p>{this.props.children}</p>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}

class ModalError extends React.Component {
  componentDidMount() {
    throw new Error('The modal had a problem.');
  }

  render() {
    return <Modal onClose={this.props.onClose}>An error was found.</Modal>;
  }
}

class Clock extends React.Component {
  state = this.readDate();

  readDate() {
    const now = new Date();
    return {
      year: now.getFullYear(),
      month: now.toLocaleString('en', { month: 'long' }),
      weekDay: now.toLocaleString('en', { weekday: 'long' }),
      day: now.getDate(),
      hour: now.getHours(),
      minute: now.getMinutes(),
      second: now.getSeconds(),
    };
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.setState(this.readDate()), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  render() {
    const { year, month, weekDay, day, hour, minute, second } = this.state;
    const time = [hour, minute, second].map((part) => String(part).padStart(2, '0')).join(':');
    return (
      <div className="clock">
        <span className="clock-year">{year}</span>
        <span className="clock-month">{month}</span>
        <div className="clock-face">
          {[...Array(12)].map((_, index) => (
            <span key={index} className="clock-mark" style={{ transform: `rotate(${index * 30}deg)` }}>
              <span>{index === 0 ? 12 : index}</span>
            </span>
          ))}
          <strong>{time}</strong>
          <small>{weekDay}, {month} {day}</small>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = { images: [], resetKey: 0, showModal: false, modalKey: 0 };

  getImages = () => {
    this.setState({ images: ['https://picsum.photos/seed/one/180/120', 'https://picsum.photos/seed/two/180/120'] });
  };

  resetMini = () => this.setState(({ resetKey }) => ({ resetKey: resetKey + 1 }));
  showModalError = () => this.setState({ showModal: true });
  closeModal = () => this.setState(({ modalKey }) => ({ showModal: false, modalKey: modalKey + 1 }));

  render() {
    return (
      <main className="page">
        <header><h1>React Components and Events</h1></header>
        <section className="panel">
          <h2>Mini project: error boundary</h2>
          <div className="columns">
            <div>
              <button onClick={this.getImages}>Get images</button>
              <div className="images">{this.state.images.map((src) => <img key={src} src={src} alt="A sample" />)}</div>
            </div>
            <ErrorBoundary key={this.state.resetKey}>
              <MiniProjectRight />
            </ErrorBoundary>
          </div>
          <button onClick={this.resetMini}>Reset right column</button>
        </section>

        <section className="panel">
          <h2>Error boundary exercise</h2>
          <p>Simulation 1: two counters share one boundary.</p>
          <ErrorBoundary><BuggyCounter /> <BuggyCounter /></ErrorBoundary>
          <p>Simulation 2: each counter has its own boundary.</p>
          <ErrorBoundary><BuggyCounter /></ErrorBoundary>
          <ErrorBoundary><BuggyCounter /></ErrorBoundary>
          <p>Simulation 3: this counter has no boundary. It will crash the page after five clicks.</p>
          <BuggyCounter />
        </section>

        <LifecycleDemo />

        <section className="panel">
          <h2>Daily challenge: Form Container</h2>
          <FormContainer />
        </section>

        <section className="panel">
          <h2>Gold exercise: Modal with error handling</h2>
          <button onClick={this.showModalError}>Open modal</button>
          {this.state.showModal && (
            <ErrorBoundary key={this.state.modalKey} onReset={this.closeModal}>
              <ModalError onClose={this.closeModal} />
            </ErrorBoundary>
          )}
        </section>

        <section className="panel">
          <h2>Ninja exercise: React clock</h2>
          <Clock />
        </section>
      </main>
    );
  }
}

export default App;
