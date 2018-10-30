import * as React from 'react';
import { IHogeAsyncActions } from '../containers/hogeAsyncContainer';
import { IHogeState } from '../states/hogeState';

interface IOwnProps {
  hoge?:any;
}

type HogeProps = IOwnProps & IHogeState & IHogeAsyncActions;

export class HogeComponent extends React.Component<HogeProps> {
  public componentDidMount() {
    this.props.startLogin();
  }
  public render() {
    const updateName = (e:any) => this.props.updateName(e.target.value)
    const updateEmail = (e:any) => this.props.updateEmail(e.target.value)
    return (
      <div>
        <div className="field">
          <input
            id="input-text-name"
            type="text"
            placeholder="name"
            value={this.props.name}
            onChange={updateName}
          />
        </div>
        <div className="field">
          <input
            id="input-text-email"
            type="email"
            placeholder="email"
            value={this.props.email}
            onChange={updateEmail}
          />
        </div>
        <div id="output">{this.props.name + ":" + this.props.email}</div>
      </div>
    );
    }
};
