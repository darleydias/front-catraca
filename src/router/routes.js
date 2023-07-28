import AcessoView from '@/views/AcessoView';
import HomeView from '@/views/HomeView';
import LoginView from '@/views/LoginView';
import EntradaSaidaView from '@/views/EntradaSaidaView';

const routes = [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/entrada-saida',
      name: 'EntradaSaida',
      title: 'Entrar ou sair',
      meta: {requiredAuth:false},
      component: EntradaSaidaView
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