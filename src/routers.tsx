import Document from './containers/document';
import Communication from './containers/communication';
import Health from './containers/health';
import University from './containers/university';
import Hearing from './containers/hearing';

export default [
  {name: 'Communication', route: '/communication', component: Communication},
  {name: 'Documents', route: '/document', component: Document},
  {name: 'Healthcare System', route: '/healthcare-system', component: Health},
  {name: 'La Trobe ISS', route: '/la-trobe', component: University},
  {name: 'Hearing', route: '/hearing', component: Hearing},
];
