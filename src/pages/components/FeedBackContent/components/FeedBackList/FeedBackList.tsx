import { FC } from 'react'
import { FeedBackListProps } from './../../../../../types/types'
import style from './FeedBack.module.scss';
import { FeedBackItem } from '../FeedBackItem';
import { sortByDate } from '@utils/utils';



export const FeedBackList:FC<FeedBackListProps> = ( {list, all} ) => {
 const sortedList = sortByDate(list)
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
