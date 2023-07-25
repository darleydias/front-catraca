import AcessoView from '@/views/AcessoView';
import HomeView from '@/views/HomeView';
import LoginView from '@/views/LoginView';

const routes = [
    {
      path: '/home',
      name: 'home',
      component: HomeView
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