// @flow
import type {ArticleState} from "../domain/ArticleState";
import {articleStore} from "../store/ArticleStore";
import {ArticleService} from "../domain/ArticleService";

const articleService = ArticleService();

const article1 = articleService.createArticle({
  title: '12 rules for life',
  author: 'Jordan Peterson'
});

const article2 = articleService.createArticle({
  title: 'The Subtle Art of Not Giving a F.',
  author: 'Mark Manson'
});

if (article1 && article2) {
  const subscriber1 = (articleState: ArticleState) => {
    console.log('subscriber1, articleState changed: ', articleState);
  };

  const subscriber2 = (articleState: ArticleState) => {
    console.log('subscriber2, articleState changed: ', articleState);
  };

  articleStore.subscribe(subscriber1);
  articleStore.subscribe(subscriber2);

  articleStore.addArticle(article1);
  articleStore.addArticle(article2);

  articleStore.unsubscribe(subscriber2);

  const likedArticle2 = articleService.updateLikes(article2, 1);
  articleStore.updateArticle(likedArticle2);

  articleStore.removeArticle(article1);

  /*
   subscriber1, articleState changed:
   {id: "acc0c6f1-b91a-491f-808a-4a4c3548be0b", likes: 0, title: "12 rules for life", author: "Jordan Peterson"}

   subscriber2, articleState changed:
   {id: "acc0c6f1-b91a-491f-808a-4a4c3548be0b", likes: 0, title: "12 rules for life", author: "Jordan Peterson"}

   subscriber1, articleState changed:
   [
   {id: "acc0c6f1-b91a-491f-808a-4a4c3548be0b", likes: 0, title: "12 rules for life", author: "Jordan Peterson"},
   {id: "969d9a01-dc8b-46c1-81fa-a3a30bec787a", likes: 0, title: "The Subtle Art of Not Giving a F.", author: "Mark Manson"}
   ]

   subscriber2, articleState changed:
   [
   {id: "acc0c6f1-b91a-491f-808a-4a4c3548be0b", likes: 0, title: "12 rules for life", author: "Jordan Peterson"},
   {id: "969d9a01-dc8b-46c1-81fa-a3a30bec787a", likes: 0, title: "The Subtle Art of Not Giving a F.", author: "Mark Manson"}
   ]

   subscriber1, articleState changed:
   [
   {id: "acc0c6f1-b91a-491f-808a-4a4c3548be0b", likes: 0, title: "12 rules for life", author: "Jordan Peterson"},
   {id: "969d9a01-dc8b-46c1-81fa-a3a30bec787a", likes: 1, title: "The Subtle Art of Not Giving a F.", author: "Mark Manson"}
   ]

   subscriber1, articleState changed:
   {id: "4f54d0a2-6c2d-468d-9580-50b7e2f9255e", likes: 1, title: "The Subtle Art of Not Giving a F.", author: "Mark Manson"}
   */
}
