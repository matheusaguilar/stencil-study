import { Component, Host, h, Prop } from '@stencil/core';
import { Color, Shape } from '../globals';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {
  @Prop() color?: Color = 'primary';
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ reflect: true }) elevation?: boolean = false;
  @Prop() shape?: Shape = 'smooth';
  @Prop() size?: 'large' | 'medium' | 'small' = 'medium';

  render() {
    return (
      <Host>
        <button
          disabled={this.disabled}
        >
          <slot>Default</slot>
        </button>
      </Host>
    );
  }
}
