import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Books() {
  return (
    <section className='books'>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};

const CoverImage = () => {
  return (
    <img
      width='200'
      src='https://images-na.ssl-images-amazon.com/images/I/71g0Xhn3EBL._AC_UL200_SR200,200_.jpg'
      alt='Dark'
    />
  );
};

const Title = () => {
  return (
    <div>
      <h1>Dark Towers</h1>
    </div>
  );
};

const Author = () => {
  return (
    <div>
      <h6>David Enrich</h6>
    </div>
  );
};

ReactDOM.render(<Books />, document.getElementById('root'));
