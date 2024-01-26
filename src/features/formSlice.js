import {createSlice} from "@reduxjs/toolkit";


const formSlice = createSlice({
    name: "form",
    initialState: {
        show: false,
        spiner: false,
        isChecked: false,
        name: localStorage.getItem("name") || "",
        number: localStorage.getItem("number") || "",
        email: localStorage.getItem("email") || "",
        message: localStorage.getItem("message") || "",
        error: '',
        showError: false,
        showResponse: false,
        response: '',
    },
    reducers: {
        handleResponse(state, action) {
            state.response = action.payload;
        },
        handleShowResponse(state) {
            state.showResponse = true;
        },
        handleCloseResponse(state) {
            state.showResponse = false;
        },
        handleCloseShow(state) {
            state.show = false;
        },
        handleOpenShow(state) {
            state.show = true;
        }
        , handleCloseSpiner(state) {
            state.spiner = false;
        },
        handleOpenSpiner(state) {
            state.spiner = true;
        },
        handleCloseChecked(state) {
            state.isChecked = false;
        },
        handleOpenChecked(state) {
            state.isChecked = true;
        },
        handleName(state, action) {
            state.name = action.payload;
        },
        handleNumber(state, action) {
            state.number = action.payload;
        },
        handleMail(state, action) {
            state.email = action.payload;
        },
        handleMessage(state, action) {
            state.message = action.payload;
        },
        handleError(state, action) {
            state.error = action.payload;
        },
        handleShowError(state) {
            state.showError = true;
        },
        handleCloseError(state) {
            state.showError = false;
        },
        handleToggleChecked(state) {
            state.isChecked = !state.isChecked;
        },
    }
});


export default formSlice.reducer;
export const {
    handleCloseShow,
    handleToggleChecked,
    handleCloseChecked,
    handleError,
    handleCloseError,
    handleShowError,
    handleCloseSpiner,
    handleMail,
    handleMessage,
    handleName,
    handleNumber,
    handleOpenShow,
    handleOpenChecked,
    handleOpenSpiner,
    handleResponse,
    handleCloseResponse,
    handleShowResponse,
} = formSlice.actions;
// const handleClose = (e) => {
//     setShow(false);
// };
//
// const handleCloseAndSubmit = (e) => {
//     setShow(false);
//     handleSubmit(e);
//     setSpiner(true);
// }
// const handleShow = () => setShow(true);
//
// async function handleSubmit(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if (!name || !number || !email || !message) {
//         setError("Пожалуйста, заполните все поля ");
//         setShowError(true);
//         setTimeout(() => {
//             setShowError(false);
//         }, 5000);
//         return;
//     }
//
//     if (isChecked === false) {
//         setError("Пожалуйста, дайте согласия на обработку персональных данных ");
//         setShowError(true);
//         setTimeout(() => {
//             setShowError(false);
//         }, 5000);
//         setSpiner(false);
//         return;
//     }
// //сайт formcarry
//     await fetch(apiURL, {
//         method: 'POST',
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({name, number, email, message})
//     })
//         .then(response => response.json())
//         .then(response => {
//             if (response.code === 200) {
//                 alert("Мы получили ваш запрос, спасибо!");
//                 setName("");
//                 setNumber("");
//                 setEmail("");
//                 setMessage("");
//                 setIsChecked(false);
//                 setSpiner(false);
//             } else if (response.code === 422) {
//                 setSpiner(false);
//                 setShowError(true);
//                 setTimeout(() => {
//                     setShowError(false);
//                 }, 5000);
//                 setError(response.message);
//
//             } else if (response.code === 429) {
//                 setSpiner(false);
//                 setShowError(true);
//                 setTimeout(() => {
//                     setShowError(false);
//                 }, 3000);
//                 setError("Слишком много запросов. Пожалуйста, попробуйте позже.");
//             } else {
//                 setSpiner(false);
//                 setShowError(true);
//                 setTimeout(() => {
//                     setShowError(false);
//                 }, 5000);
//                 setError(response.message);
//             }
//         })
//         .catch(error => {
//             setError(error.message ? error.message : error);
//             setSpiner(false);
//             setShowError(true);
//             setTimeout(() => {
//                 setShowError(false);
//             }, 3000);
//
//         })
//
// }
//
//
// const handleClick = () => {
//     setIsChecked(!isChecked);
// };


// const [show, setShow] = useState(false);
// const [spiner, setSpiner] = useState(false);
// const apiURL = 'https://formcarry.com/s/Jc1yaimdssdfgO72gsdfgsfdgsdf'
// const [isChecked, setIsChecked] = useState(false);
// const [name, setName] = useState(localStorage.getItem("name") || "");
// const [number, setNumber] = useState(localStorage.getItem("number") || "");
// const [email, setEmail] = useState(localStorage.getItem("email") || "");
// const [message, setMessage] = useState(localStorage.getItem("message") || "");
// const [error, setError] = useState("");
// const [showError, setShowError] = useState(false);error