// @flow
import * as React from 'react';

type Props = {
  label: string,
  value?: any,
  checked?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  onChange?: (value: any) => mixed,
};

class Toggle extends React.PureComponent<Props, void> {
  static defaultProps = {
    checked: false,
    disabled: false,
    hidden: false,
  };

  change = () => {
    if (this.props.onChange != null) {
      this.props.onChange(this.props.value);
    }
  };

  render() {
    const props = this.props;

    return props.hidden ? null : (
      <label className={`custom-control custom-toggle${props.disabled ? ' custom-control-disabled' : ''}`}>
        <input
          type="checkbox"
          className="custom-control-input"
          disabled={props.disabled}
          checked={props.checked}
          onChange={this.change}
        />
        <span className="custom-control-indicator" />
        <span className="custom-control-description">{props.label}</span>
      </label>
    );
  }
}

export default Toggle;
