import angular from 'angular';
import NewsService from './news.service';

const NewsModule = angular
  .module('news', [])
  .service('NewsService', NewsService)
  .name;

export default NewsModule;
