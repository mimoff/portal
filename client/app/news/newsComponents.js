import angular from 'angular';
import NewsService from './newsService/news';
import NewsView from './newsView/newsView';
import NewsCard from './newsCard/newsCard';

let NewsModule = angular.module('app.News', [
  NewsService,
  NewsView,
  NewsCard
])

.name;

export default NewsModule;
