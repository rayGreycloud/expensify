import moment from 'moment';

export default [
  {
  id: '1',
  description: 'Art',
  note: '',
  amount: 195,
  createdAt: 0
  }, {
  id: '2',
  description: 'Bag',
  note: '',
  amount: 10195,
  createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
  id: '3',
  description: 'Cog',
  note: '',
  amount: 1000,
  createdAt: moment(0).add(4, 'days').valueOf()
  }
];
