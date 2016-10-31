class NewsViewController {
  constructor(NewsService) {
    this.name = 'newsView';
    this._NewsService = NewsService;
  }

  $onInit() {
    this.feed = 'https://habrahabr.ru/rss/interesting/';//?with_hubs=true:&with_tags=true:';
    //this.mailService.getMails().then(response => this.emails = response);
  }

  onUpdate(){
    this._NewsService.getNews(this.feed);
  }
}

NewsViewController.$inject = ['NewsService'];

export default NewsViewController;
