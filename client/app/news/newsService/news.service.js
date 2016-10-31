class NewsService {
  constructor($http,$q) {
    this._$http = $http;
    this._$q = $q;
  }

  getNews(feedurl) {
    debugger;
    var feedparser = require('node-feedparser');

    return this._$http.get(feedurl).then(response => feedparser(response.data, function(error, ret) {
      debugger;
      //return _$q.resolve(ret);
      console.log(error,ret);
    } ));
}
}

NewsService.$inject = ['$http','$q'];

export default NewsService;
