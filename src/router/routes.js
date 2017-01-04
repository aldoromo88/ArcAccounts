import Home from 'components/Hello';
import DynamicLoader from 'components/DynamicLoader';

const Accounts = resolve => require(['components/Accounts/Accounts'], resolve);
const Balance = resolve => require(['components/Balance/Balance'], resolve);
const NewTransaction = resolve => require(['components/Transactions/NewTransaction'], resolve);
//const TransactionHistory = resolve => require(['components/Transactions/TransactionHistory'], resolve);

export default [
  { path: '/', redirect: '/Home' },
  { path: '/Home', component: Home, meta: { ShowInMenu: true, Display: 'Home', Icon: 'fa-home' } },

  { path: '/Balance', component: Balance, meta: { RequiresAuth: true, ShowInMenu: true, Display: 'Balance', Icon: 'fa-line-chart' } },

  { path: '/Transactions', redirect: '/Transactions/New', meta: { ShowInMenu: true, Display: 'Transactions', Icon: 'fa-exchange' } },
  //{ path: '/Transactions/History', component: TransactionHistory, meta: { RequiresAuth: true } },
  { path: '/Transactions/New', component: NewTransaction, meta: { RequiresAuth: true } },

  { path: '/Accounts/:Mode?/:Id?', component: Accounts, meta: { RequiresAuth: true } },
  { path: '/Accounts', redirect: '/Accounts/All', component: Accounts, meta: { ShowInMenu: true, Display: 'Accounts', Icon: 'fa-bank' } },
  { path: '/:ComponentName', component: DynamicLoader },
];
