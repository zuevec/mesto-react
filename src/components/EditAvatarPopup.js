import React, {useRef} from 'react';
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        onUpdateAvatar({
            avatar: inputRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name={'avatar'}
            title={'Обновить аватар'}
            isOpen={isOpen}
            onClose={onClose}
            btnText={'Сохранить'}
            onSubmit={handleSubmit}
        >
            <fieldset className="popup__set">
                <input
                    type="url"
                    name="avatar"
                    id="avatar"
                    placeholder="Ссылка на картинку"
                    className="popup__input"
                    required
                    ref={inputRef}
                />
                <span id="avatar-error" className="popup__input-error"></span>
            </fieldset>
        </PopupWithForm>
    );
};

export default EditAvatarPopup;