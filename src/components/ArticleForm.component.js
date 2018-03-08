// @flow
import React from 'react';

type Props = {
  changeTitle: Function;
  changeAuthor: Function;
  invalidTitle: boolean;
  invalidAuthor: boolean;
  submitForm: Function;
}

export const ArticleFormComponent = (props: Props) => {
  const {
    changeTitle,
    changeAuthor,
    invalidTitle,
    invalidAuthor,
    submitForm
  } = props;

  const onSubmit = (submitHandler) => (event) => {
    event.preventDefault();
    submitHandler(event);
  };

  return (
    <form
      noValidate
      onSubmit={onSubmit(submitForm)}
    >
      <div>
        <label htmlFor="article-title">Title</label>
        <input
          type="text"
          id="article-title"
          name="articleTitle"
          autoComplete="off"
          onChange={(event) => changeTitle(event)}
        />
        {invalidTitle && (<p>Please fill in the title</p>)}
      </div>
      <div>
        <label htmlFor="article-author">Author</label>
        <input
          type="text"
          id="article-author"
          name="articleAuthor"
          autoComplete="off"
          onChange={(event) => changeAuthor(event)}
        />
        {invalidAuthor && (<p>Please fill in the author</p>)}
      </div>
      <button
        type="submit"
        value="Submit"
      >
        Create article
      </button>
    </form>
  )
};
