
import React, { useState } from 'react';
import { IconDisclosureRight, IconChevronDown } from '@salutejs/plasma-icons';
import './profile.css'
import { Button, Card, Cell, Container, DeviceThemeProvider, H2, HeaderSubtitle, HeaderTitle, Headline1, Radiobox, Switch, TextField, } from '@salutejs/plasma-ui';
import Axios from 'axios';



const Profile = () => {

    const [activeButton, setActiveButton] = useState('edit');

    const [isReadOnly, setIsReadOnly] = useState(false);

    const handleEdit = (e) => {
        setActiveButton('edit');
        setIsReadOnly(false);
    };

    const handleSubmit = (e) => {
        setActiveButton('save');
        setIsReadOnly(true);
        e.preventDefault();
        Axios.post('http://localhost:3000/add-user', {
            name: name,
            surname: surname,
            birthday: birthdate,
        })
    };

    let value = '';

    const [name, setName] = useState(value);
    const [surname, setSurname] = useState(value);
    const [birthdate, setBirthdate] = useState(value);

    return (
        <DeviceThemeProvider className='profile'>
            <h2 className='profile__title'>Профиль</h2>
            <Container className='container'>
                <div className='profile__content'>

                    <div className='profile__edited' >

                        <HeaderSubtitle className='profile__text' >Имя</HeaderSubtitle>
                        <TextField required onChange={(e) => { setName(e.target.value) }} className='profile__input' placeholder={isReadOnly ? '' : 'Введите своё имя'} readOnly={isReadOnly} type='text'></TextField>

                        <HeaderSubtitle className='profile__text'>Фамилия</HeaderSubtitle>
                        <TextField onChange={(e) => { setSurname(e.target.value) }} required className='profile__input' placeholder={isReadOnly ? '' : 'Введите свою фамилию'} readOnly={isReadOnly} type='text'></TextField>

                        <HeaderSubtitle className='profile__text'>Дата рождения</HeaderSubtitle>
                        <TextField onChange={(e) => { setBirthdate(e.target.value) }} className='profile__input' placeholder={isReadOnly ? '' : 'Введите свою дату рождения'} readOnly={isReadOnly} type="date" id="birthdate" name="birthdate" ></TextField>

                    </div>

                    <div className='profile__btn_cont'>
                        <Button
                            className={`profile__btn ${activeButton === 'edit' ? 'profile__btn--active' : ''}`}
                            onClick={handleEdit}
                            disabled={activeButton === 'edit'}>Редактировать</Button>
                        <Button
                            className={`profile__btn ${activeButton === 'save' ? 'profile__btn--active' : ''}`}
                            onClick={handleSubmit}
                            view="primary"
                            type='submit'
                            disabled={activeButton === 'save'}>Сохранить</Button>
                    </div>
                </div>
            </Container >
        </DeviceThemeProvider >
    );
};
export { Profile };








