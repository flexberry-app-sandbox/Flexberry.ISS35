import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-i-s-s35-form-l');
  this.route('i-i-s-i-s-s35-form-e',
  { path: 'i-i-s-i-s-s35-form-e/:id' });
  this.route('i-i-s-i-s-s35-form-e.new',
  { path: 'i-i-s-i-s-s35-form-e/new' });
  this.route('i-i-s-i-s-s35-investment-l');
  this.route('i-i-s-i-s-s35-investment-e',
  { path: 'i-i-s-i-s-s35-investment-e/:id' });
  this.route('i-i-s-i-s-s35-investment-e.new',
  { path: 'i-i-s-i-s-s35-investment-e/new' });
  this.route('i-i-s-i-s-s35-size-l');
  this.route('i-i-s-i-s-s35-size-e',
  { path: 'i-i-s-i-s-s35-size-e/:id' });
  this.route('i-i-s-i-s-s35-size-e.new',
  { path: 'i-i-s-i-s-s35-size-e/new' });
  this.route('i-i-s-i-s-s35-sub-industry-l');
  this.route('i-i-s-i-s-s35-sub-industry-e',
  { path: 'i-i-s-i-s-s35-sub-industry-e/:id' });
  this.route('i-i-s-i-s-s35-sub-industry-e.new',
  { path: 'i-i-s-i-s-s35-sub-industry-e/new' });
  this.route('i-i-s-i-s-s35-support-l');
  this.route('i-i-s-i-s-s35-support-e',
  { path: 'i-i-s-i-s-s35-support-e/:id' });
  this.route('i-i-s-i-s-s35-support-e.new',
  { path: 'i-i-s-i-s-s35-support-e/new' });
});

export default Router;
