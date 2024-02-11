import { TrophyTwoTone , HeartTwoTone, CalendarTwoTone,IdcardTwoTone
} from '@ant-design/icons';
import './menuSide.css';

const items =[
  {
    key: '1',
    icon: <CalendarTwoTone twoToneColor='#061178'/>,
    label: 'Календарь',
  },
  {
    key: '2',
    icon: <HeartTwoTone twoToneColor='#061178'/>,
    label: 'Тренировки',
  },
  {
    key: '3',
    icon: <TrophyTwoTone twoToneColor='#061178'/>,
    label: 'Достижения',
  },
  {
    key: '4',
    icon: <IdcardTwoTone twoToneColor='#061178'/>,
    label: 'Профиль',
   },
]
  

const MenuSide = () => {
  return (
    <ul className="menu_list">
      {items.map((el) => (
        <li key={el.key} className="menu_list-item">
          {el.icon}
          <span className="item-label">{el.label}</span>
        </li>
      ))}

    </ul>
  )
}

export default MenuSide;
