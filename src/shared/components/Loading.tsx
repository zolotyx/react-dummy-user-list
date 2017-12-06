import * as React from 'react';
import { ProgressBar } from 'react-bootstrap';

interface LoadingProps {
  percent?: number
}

interface LoadingState {
  now: number,
  progressInterval: any
}

export class Loading extends React.Component<LoadingProps, LoadingState> {

  constructor(props: LoadingProps, state: LoadingState) {
    super(props, state);
    this.state = {
      now: 0,
      progressInterval: null
    };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      const { now } = this.state;
      this.setState({ now: now + 5 });
      if (now > 90) {
        clearInterval(this.state.progressInterval);
      }
    }, 100);

    this.setState({ progressInterval: interval });
  }

  componentWillUnmount() {
    this.setState({ progressInterval: 100 });
    clearInterval(this.state.progressInterval);
  }


  render() {
    const { now } = this.state;
    return (
      <ProgressBar active now={now} label={`${now}%`}/>
    );
  }
}
