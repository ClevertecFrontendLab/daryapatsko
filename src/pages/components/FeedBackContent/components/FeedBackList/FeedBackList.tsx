import React, { FC } from 'react'
import { FeedBackT } from './../../../../../types/types'
import style from './FeedBack.module.css';
import { FeedBackItem } from '../FeedBackItem';

interface FeedBackListProps {
    list: FeedBackT[],
    all: boolean,
  }

export const FeedBackList:FC<FeedBackListProps> = ( {list, all} ) => {
  const sortedList = [...list].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const lastFeebBack = sortedList.slice(0, 4);
  return (
    <div className={style.feedBackList_container}>
        <ul className={style.feedBack_list}>
        {all ? (
          <>
            {list.map(item => (
              <FeedBackItem item={item} />
            ))}
          </>
        ) : (
          <>
            {lastFeebBack.map(item => (
              <FeedBackItem item={item} />
            ))}
          </>
        )}
        </ul>
      
    </div>
  )
}
