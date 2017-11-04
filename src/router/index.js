import Vue from 'vue'
import Router from 'vue-router'
import Projects from '@/components/Projects'
import AddProject from '@/components/AddProject'
import Project from '@/components/Project'
import DeleteProject from '@/components/DeleteProject'
import EditProject from '@/components/EditProject'
import Login from '@/components/Login'
import Register from '@/components/Register'
import LoginRegister from '@/components/LoginRegister'
import HomePage from '@/components/HomePage'
import NoContent from '@/components/NoContent'
import Sprints from '@/components/SprintsComponents/Sprints'
import Sprint from '@/components/SprintsComponents/Sprint'
import EditSprint from '@/components/SprintsComponents/EditSprint'
import DeleteSprint from '@/components/SprintsComponents/DeleteSprint'
import GitHubCallBack from '@/components/GitHubCallBack'
import GitHubProjects from '@/components/GitHubProjects'
import Releases from '@/components/ReleasesComponents/Releases'
import Release from '@/components/ReleasesComponents/Release'
import UserProfile from '@/components/UserProfile';
import EditUserProfile from '@/components/EditUserProfile';
import DeleteUserProfile from '@/components/DeleteUserProfile';
import NotFound from '@/components/NotFound';
import Issues from '@/components/IssuesComponents/Issues';

Vue.use(Router);

const router = new Router({

  routes: [
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/addproject',
      name: 'AddProject',
      component: AddProject,
    },
    {
      path: '/project/:id',
      name: 'Project',
      component: Project,
    },
    {
      path: '/deleteproject',
      name: 'DeleteProject',
      component: DeleteProject,
    },
    {
      path: '/editproject/:id',
      name: 'EditProjects',
      component: EditProject,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/register',
      name: 'Register',
      component: Register,
    },

    {
      path: '/loginregister',
      name: 'LoginRegister',
      component: LoginRegister,
    },

    {
      path: '/user',
      name: 'UserProfile',
      component: UserProfile,
    },

    {
      path: '/edituser',
      name: 'EditUserProfile',
      component: EditUserProfile,
    },

    {
      path: '/deleteuser',
      name: 'DeleteUserProfile',
      component: DeleteUserProfile,
    },
    {
      path: '/githubcallback',
      name: 'GitHubCallBack',
      component: GitHubCallBack,
    },

    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/releases/:id/sprints',
      name: 'Sprints',
      component: Sprints,
    },
    {
      path: '/sprints/:id',
      name: 'Sprint',
      component: Sprint,
    },
    {
      path: '/deletesprint',
      name: 'DeleteSprint',
      component: DeleteSprint,
    },
    {
      path: '/githubprojects',
      name: 'GitHubProjects',
      component: GitHubProjects,
    },
    {
      path: '/editsprint',
      name: 'EditSprint',
      component: EditSprint,
    },
    {
      path: '/project/:id/releases',
      name: 'Releases',
      component: Releases,
    },
    {
      path: '/releases/:id',
      name: 'Release',
      component: Release,
    },
    {
      path: '/nocontent',
      name: 'NoContent',
      component: NoContent,
    },
    {
      path: '/notFound',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/project/:id/issues',
      name: 'Issues',
      component: Issues,
    },
  ],
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/notFound') {
    next();
  } else if (!to.matched.length) {
    next('/notFound');
  } else if (localStorage.getItem('token') === null) {
    next('/');
  } else {
    next();
  }
});
