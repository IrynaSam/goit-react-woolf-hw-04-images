import React, { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return <TailSpin color="#00BFFF" height={80} width={80} />;
  }
}
