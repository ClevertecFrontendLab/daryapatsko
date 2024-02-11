import React, { FC } from 'react';
import './content.css';
import { HeartTwoTone, CalendarTwoTone, IdcardTwoTone } from '@ant-design/icons';
import { Content } from 'antd/lib/layout/layout';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

interface IContent {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}
const ContentMain: FC<IContent> = ({ collapsed, setCollapsed }) => {
    return (
        <Content className='site-layout-content'>
            <div className='main-text_box'>
                С CleverFit ты сможешь:
                <br/>— планировать свои тренировки на календаре, выбирая тип и
                уровень нагрузки; 
                <br/>— отслеживать свои достижения в разделе статистики, сравнивая свои
                результаты с нормами и рекордами; 
                <br/>— создавать свой профиль, где ты можешь загружать
                свои фото, видео и отзывы о тренировках; 
                <br/>— выполнять расписанные тренировки для
                разных частей тела, следуя подробным инструкциям и советам профессиональных
                тренеров.
            </div>
            <div className='middle-text-box'>
                CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                откладывай на завтра — начни тренироваться уже сегодня!
            </div>
            <div className='cards-box'>
                <div className='card-item'>
                    <p className='card-text'>Расписать тренировки</p>
                    <div className='card-description'>
                        <HeartTwoTone />
                        <span>Тренировки</span>
                    </div>
                </div>
                <div className='card-item'>
                    <p className='card-text'>Назначить календарь</p>
                    <div className='card-description'>
                        <CalendarTwoTone />
                        <span>Календарь</span>
                    </div>
                </div>
                <div className='card-item'>
                    <p className='card-text'>Заполнить профиль</p>
                    <div className='card-description'>
                        <IdcardTwoTone/>
                        <span>Профиль</span>
                    </div>
                </div>
            </div>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
            })}
        </Content>
    );
};

export default ContentMain;
