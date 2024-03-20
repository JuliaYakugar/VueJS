import Vue from 'vue';
import Router from 'vue-router';

import MainComponent from '@/components/MainComponent.vue';
import BlogComponent from '@/components/BlogComponent.vue';
import ProjectPageComponent from '@/components/ProjectPageComponent.vue';
import ArticlePageComponent from '@/components/ArticlePageComponent.vue';
import OneProjectComponent from '@/components/OneProjectComponent.vue';
import NotFound from '@/components/NotFound.vue'

Vue.use(Router);


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainComponent
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogComponent
        },
        {
            path: '/project',
            name: 'project',
            component: ProjectPageComponent
        },
        {
            path: '/article',
            name: 'article',
            component: ArticlePageComponent
        },
        {
            path: '/one-project',
            name: 'one-project',
            component: OneProjectComponent
        },
        {
            path: '/404',
            name: 'not-found',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]

});