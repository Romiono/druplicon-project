import React from "react";
import classes from "./form.module.css";
import up from "../../ref/form/D-flying.svg";
import down from "../../ref/form/D.svg";
import phone from "../../ref/form/phone-line (2).svg";
import mail from "../../ref/form/mail.svg";
import {FaCheckSquare, FaRegSquare} from "react-icons/fa";
import {Container, Modal, Form, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {
    handleCloseChecked,
    handleCloseError, handleCloseResponse,
    handleCloseShow,
    handleCloseSpiner,
    handleError, handleMail, handleMessage, handleName, handleNumber,
    handleOpenShow,
    handleOpenSpiner, handleResponse,
    handleShowError, handleShowResponse,
    handleToggleChecked
} from "../../features/formSlice";
import {useNavigate} from "react-router-dom";




const FormFooter = () => {

    const dispatch = useDispatch();
    const apiURL = 'https://formcarry.com/s/7tnYmlnO75';
    // const apiURL = 'https://formcarry.com/s/7tnYmlnO75fsfsdfds';

    const show = useSelector(state => state.form.show);
    const spiner = useSelector(state => state.form.spiner);
    const isChecked = useSelector(state => state.form.isChecked);
    const name = useSelector(state => state.form.name);
    const number = useSelector(state => state.form.number);
    const email = useSelector(state => state.form.email);
    const message = useSelector(state => state.form.message);
    const error = useSelector(state => state.form.error);
    const showError = useSelector(state => state.form.showError);
    const showResponse = useSelector(state => state.form.showResponse);
    const Response = useSelector(state => state.form.response);

    let navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
    }

    const handleClose = () => {
        dispatch(handleCloseShow());
        handleNavigate();
    };

    const handleCloseAndSubmit = (e) => {
        dispatch(handleOpenSpiner());
        handleSubmit(e);
    }
    const handleShow = () => dispatch(handleOpenShow());

    async function handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!name || !number || !email || !message) {
            dispatch(handleError('Пожалуйста, заполните все поля '));
            dispatch(handleShowError());
            setTimeout(() => {
                dispatch(handleCloseError());
            }, 5000);
            return;
        }

        if (isChecked === false) {
            dispatch(handleError('Пожалуйста, дайте согласия на обработку персональных данных '));
            dispatch(handleShowError());
            setTimeout(() => {
                dispatch(handleCloseError());
            }, 5000);
            dispatch(handleCloseSpiner())
            return;
        }
//сайт formcarry
        await fetch(apiURL, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, number, email, message})
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    dispatch(handleResponse("Мы получили ваш запрос, спасибо!"));
                    dispatch(handleShowResponse());
                    dispatch(handleName(''));
                    dispatch(handleNumber(''));
                    dispatch(handleMail(''));
                    dispatch(handleMessage(''));
                    dispatch(handleCloseChecked());
                    dispatch(handleCloseSpiner());
                    setTimeout(() => {
                        dispatch(handleCloseResponse());
                    }, 3000);

                }
                else {
                    dispatch(handleCloseSpiner());
                    dispatch(handleShowError());
                    setTimeout(() => {
                        dispatch(handleCloseError())
                    }, 5000);
                    dispatch(handleError(response.message));
                }
            })
            .catch(error => {
                dispatch(handleError(error.message ? error.message : error));
                dispatch(handleCloseSpiner());
                dispatch(handleShowError());
                setTimeout(() => {
                    dispatch(handleCloseError())
                }, 3000);
            })
        setTimeout(() => {
            dispatch(handleCloseShow());
            handleNavigate();
        }, 2000)

    }


    const handleClick = () => {
        dispatch(handleToggleChecked());
    };

    return (
        <div className={classes.main}>
            <Container>

                <img src={up} alt={up} className={classes.SvgUp}/>
                <div className={classes.mainContent}>
                    <div className={classes.Contacts}>
                        <h1>Оставить заявку на поддержку сайта</h1>
                        <p style={{opacity: 0.7}}>Срочно нужна поддержка сайта? Ваша команда не успевает справиться
                            самостоятельно или предыдущий подрядчик не справился с работой? Тогда вам точно к нам!
                            Просто оставьте заявку и наш менеджер с вами свяжется!</p>
                        <div className={classes.phone}>
                            <img alt={phone} src={phone} style={{marginRight: 18, opacity: 0.5}}/>8 800 222-26-73
                        </div>
                        <div className={classes.mail}>
                            <img alt={mail} src={mail} style={{marginRight: 18, opacity: 0.5}}/>info@drupal-coder.ru
                        </div>
                    </div>


                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body className={classes.modal}>
                            <Form>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Control
                                        type="text"
                                        placeholder="Имя"
                                        autoFocus
                                        value={name}
                                        onChange={(e) => {
                                            dispatch(handleName(e.target.value));
                                            localStorage.setItem("name", e.target.value);
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="number">
                                    <Form.Control
                                        type="text"
                                        placeholder="Телефон"
                                        autoFocus
                                        value={number}
                                        onChange={(e) => {
                                            dispatch(handleNumber(e.target.value));
                                            localStorage.setItem("number", e.target.value);
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                        autoFocus
                                        value={email}
                                        onChange={(e) => {
                                            dispatch(handleMail(e.target.value));
                                            localStorage.setItem("email", e.target.value);
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="Textarea"
                                >
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder='Ваш комментарий'
                                        value={message}
                                        onChange={(e) => {
                                            dispatch(handleMessage(e.target.value));
                                            localStorage.setItem("message", e.target.value);
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <div className={classes.checkbox}>
                                        <div className={classes.checkboxСontainer} onClick={handleClick}>
                                            {isChecked ? (
                                                <FaCheckSquare className={classes.customIcon3}/>
                                            ) : (
                                                <FaRegSquare className={classes.customIcon4}/>
                                            )}
                                        </div>
                                        <p className={classes.checkText}>Отправляя заявку, я даю согласие на обработку своих персональных данных</p>
                                    </div>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer className={classes.modalFooter}>
                            {spiner ? <Spinner/>
                                :
                                <button className={classes.btn} onClick={handleCloseAndSubmit}>
                                    Оставить заявку!
                                </button>}
                            {error && showError && (
                                <p className={classes.erorr}>
                                    {error}
                                </p>
                            )}
                            {Response && showResponse && (
                                <p className={classes.response}>
                                    {Response}
                                </p>
                            )}
                        </Modal.Footer>
                    </Modal>
                    <form className={classes.form} onSubmit={(e) => handleSubmit(e)} method={"post"}>
                        <div className={classes.form1}>
                            <input
                                id={"name"}
                                placeholder={"Ваше имя"}
                                value={name}
                                onChange={(e) => {
                                    dispatch(handleName(e.target.value));
                                    localStorage.setItem("name", e.target.value);
                                }}
                                autoComplete={"off"}
                            />
                        </div>
                        <div className={classes.form1}>
                            <input
                                id={"number"}
                                placeholder={"Телефон"}
                                type={"number"}
                                value={number}
                                onChange={(e) => {
                                    dispatch(handleNumber(e.target.value));
                                    localStorage.setItem("number", e.target.value);
                                }}
                                onKeyPress={(e) => {
                                    const isDigit = /\d/.test(e.key);
                                    if (!isDigit) {
                                        e.preventDefault();
                                    }
                                }}
                                autoComplete={"off"}
                                pattern="\d*"
                            />
                        </div>
                        <div className={classes.form1}>
                            <input
                                id={"email"}
                                placeholder={"E-mail"}
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    dispatch(handleMail(e.target.value));
                                    localStorage.setItem("email", e.target.value);
                                }}
                                autoComplete={"off"}
                            />
                        </div>
                        <div className={classes.form2}>
                            <input
                                id={"message"}
                                placeholder={"Ваш комментарий"}
                                value={message}
                                onChange={(e) => {
                                    dispatch(handleMessage(e.target.value));
                                    localStorage.setItem("message", e.target.value);
                                }}
                                autoComplete={"off"}
                            />
                        </div>
                        <div className={classes.checkbox}>
                            <div className={classes.checkboxСontainer} onClick={handleClick}>
                                {isChecked ? (
                                    <FaCheckSquare className={classes.customIcon1}/>
                                ) : (
                                    <FaRegSquare className={classes.customIcon2}/>
                                )}
                            </div>
                            Отправляя заявку, я даю согласие на обработку своих персональных данных
                        </div>
                        <div className={classes.modalFooter}>
                            {spiner ? <Spinner variant={'light'}/> : <button className={classes.btn} onClick={handleCloseAndSubmit}>
                                Оставить заявку!
                            </button>}
                        </div>
                        {error && showError && (
                            <p className={classes.erorr}>
                                {error}
                            </p>
                        )}
                        {Response && showResponse && (
                            <p className={classes.response}>
                                {Response}
                            </p>
                        )}
                    </form>
                </div>

                <div className={classes.down}>
                    <p style={{opacity: 0.5}}>
                        Проект ООО «Инитлаб», Краснодар, Россия.
                    </p>
                    <p style={{opacity: 0.5}}>
                        Drupal является зарегистрированной торговой маркой Dries Buytaert.
                    </p>
                </div>
                <img src={down} alt={down} className={classes.SvgDown}/>
                <div className={classes.down1}></div>
            </Container>
        </div>
    )
        ;
};

export default FormFooter;
