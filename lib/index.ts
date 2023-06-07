import settings from './decorator';

export default class TestDecorator {
  foo: string;

  @settings
  private keySecret?: string;

  @settings
  ue?: string;

  constructor(foo: string) {
    this.foo = foo;
  }

  bar() {
    console.log('BarkeyStarkbank', this.keySecret);
  }
}

new TestDecorator('foo').bar();
