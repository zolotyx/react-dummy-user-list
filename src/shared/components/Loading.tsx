import * as React from 'react';
import { ProgressBar } from 'react-bootstrap';

interface LoadingProps {
  percent?: number;
}

interface LoadingState {
  now: number;
  incrementStep: number;
  progressInterval: any;

}

export class Loading extends React.Component<LoadingProps, LoadingState> {

  constructor(props: LoadingProps, state: LoadingState) {
    super(props, state);
    this.state = {
      now: 0,
      incrementStep: 15,
      progressInterval: 0
    };
  }

  componentDidMount() {
    // start interval to increase the percentage by 15 and then reduce that number over time
    const interval = setInterval(
      () => {
        const { now, incrementStep } = this.state;
        // slow the speed down
        const newIncrementStep = incrementStep > 5 ? incrementStep - 1 : incrementStep;
        this.setState({ now: now + incrementStep, incrementStep: newIncrementStep });
        if (now > 90) {
          clearInterval(this.state.progressInterval);
        }
      },
      100
    );

    this.setState({ progressInterval: interval });
  }

  componentWillUnmount() {
    this.setState({ progressInterval: 100 });
    clearInterval(this.state.progressInterval);
  }

  render() {
    const { now } = this.state;
    return (<ProgressBar active={true} now={now} label={`${now}%`}/>);
  }
}
