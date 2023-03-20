import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SomethingListComponent extends Component {
  @action
  showSomething(something) {
    alert(`something is ${something}`);
  }
}
