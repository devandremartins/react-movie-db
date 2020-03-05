import React from 'react';
import { IMG_BASE_URL, POSTER_SIZE } from '../../config';
import { ItemThumbnail } from '../ItemThumbnail/ItemThumbnail';
import { useFetch } from '../../hooks/useFetch';

export const Main = props => {
  let pathName = props.location.pathname;
  const [items] = useFetch(pathName);

  return (
    <main>
      <section className="items-grid">
        {items.map(item => (
          <ItemThumbnail
            key={item.id}
            itemId={item.id}
            title={item.title}
            voteAverage={item.vote_average}
            poster={`${IMG_BASE_URL}/${POSTER_SIZE}${item.poster_path}`}
          />
        ))}
      </section>
    </main>
  );
};
