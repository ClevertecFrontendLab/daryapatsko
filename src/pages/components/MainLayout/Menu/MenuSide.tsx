import { TrophyTwoTone , HeartTwoTone, CalendarTwoTone,IdcardTwoTone
} from '@ant-design/icons';
import './menuSide.css';

const items =[
  {
    key: '1',
    icon: <CalendarTwoTone twoToneColor={['#061178', '#061178']}/>,
    label: 'Календарь',
  },
  {
    key: '2',
    icon: <HeartTwoTone twoToneColor={['#061178', '#061178']}/>,
    label: 'Тренировки',
  },
  {
    key: '3',
    icon: <TrophyTwoTone twoToneColor={['#061178', '#061178']}/>,
    label: 'Достижения',
  },
  {
    key: '4',
    icon: <IdcardTwoTone twoToneColor={['#061178', '#fff']}/>,
    label: 'Профиль',
   },
]
  

const MenuSide = ({collapsed} : {collapsed:boolean}) => {
  return (
    <ul className="menu_list">
      {items.map((el) => (
        <li key={el.key} className="menu_list-item">
          <div className='icon_menu'>{el.icon}</div>
          <span className={`item-label ${!collapsed ? 'visible' : ''}`}>{el.label}</span>
        </li>
      ))}
    </ul>
  )
}

export default MenuSide;
