import { Button, Modal } from 'antd';
import { useState } from 'react';
import './modal.css';


interface IModal{
img: string,
title: string,
description: string,
nameBtn: string,
}
export const ModalComponent:React.FC<IModal> = ({img, title, description,nameBtn}) => {
  
  return (
      <Modal open={true} closable={false}>
        <img src={img} alt={img} />
        <h3>{title}</h3>
        <p>{description}</p>
      </Modal>
  );
};


