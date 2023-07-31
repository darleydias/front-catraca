import AcessoView from '@/views/AcessoView';
import LocalView from '@/views/LocalView';
import HomeView from '@/views/HomeView';
import LoginView from '@/views/LoginView';
import Local from '@/views/Local';

const routes = [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/local',
      name: 'Local',
      title: 'Local onde ocorre o acesso',
      meta: {requiredAuth:false},
      component: LocalView
    },
    {
      path: '/local/novo',
      name: 'LocalNovo',
      title: 'Novo Local',
      meta: {requiredAuth:false},
      component: Local
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/acesso',
      name: 'acesso',
      component: AcessoView
    },
  ]
  export default routes;