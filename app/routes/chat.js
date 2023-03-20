import Route from '@ember/routing/route';

export default class ChatRoute extends Route {
  model() {
    return ['something1', 'something2', 'something3'];
  }
}
