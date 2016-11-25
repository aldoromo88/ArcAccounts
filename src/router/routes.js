import Home from 'components/Hello';

const Accounts = resolve => require(['components/Accounts'], resolve);
const Balance = resolve => require(['components/Balance'], resolve);
const Transactions = resolve => require(['components/Transactions'], resolve);

export default [
  { path: '/', redirect: '/Home' },
  { path: '/Home', component: Home, meta: { ShowInMenu: true, Display: 'Home', Icon: 'fa-home' } },

  { path: '/Balance', component: Balance, meta: { RequiresAuth: true, ShowInMenu: true, Display: 'Balance', Icon: 'fa-line-chart' } },

  { path: '/Transactions', component: Transactions, meta: { RequiresAuth: true, ShowInMenu: true, Display: 'Transactions', Icon: 'fa-exchange' } },

  { path: '/Accounts/:Mode/:Id?', component: Accounts, meta: { RequiresAuth: true} },
  { path: '/Accounts', redirect: '/Accounts/All' , meta: { ShowInMenu: true, Display: 'Accounts', Icon: 'fa-bank' }},
];
