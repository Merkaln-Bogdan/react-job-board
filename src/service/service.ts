import { fetchData } from "../http-common";

class ArticlesDataService {
  private http = fetchData();

  private ep = "/templates/ZM1r0eic3XEy";

  public async getAllArticles() {
    return this.http.get<any>(
      `${this.ep}/data?access_token=${process.env.REACT_APP_JOB_API_KEY}`
    );
  }
}

const articlesDataService = new ArticlesDataService();

export { articlesDataService };
