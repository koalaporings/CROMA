// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Editor, EditorState } from 'draft-js';
// import Footer from '../../Components/Footer/Footer';
// import Header from '../../Components/Header/Header';
// import NavBar from '../../Components/Navigation Bar/NavBar';
// import './Announcements.css';

// const AddAnnouncement = ({children}) => {
//     const [editorState, setEditorState] = useState(EditorState.createEmpty());
//     const [title, setTitle] = useState('');
//     const navigate = useNavigate();

//     const handleEditorChange = (newEditorState) => {
//         setEditorState(newEditorState);
//     };

//     const handleTitleChange = (event) => {
//         setTitle(event.target.value);
//     };

//     const handleSubmit = () => {
//         // submit the announcement title and editor content to the server
//         console.log('Announcement Title:', title);
//         console.log('Announcement Content:', editorState.getCurrentContent().getPlainText());
//         navigate('/announcements'); // navigate to the announcements page after submission
//     };

//     return(
//         <div>
//             <NavBar/>
//             <Header/>

//             <div className='add-announcement-container'>
//                 <div className='add-announcement-form'>
//                     <label htmlFor='announcement-title'>Title:</label>
//                     <input type='text' id='announcement-title' value={title} onChange={handleTitleChange} />

//                     <label htmlFor='announcement-content'>Content:</label>
//                     <Editor editorState={editorState} onChange={handleEditorChange} />
//                 </div>

//                 <button onClick={handleSubmit}>Submit</button>
//             </div>

//             {/* <Footer/>  */}
//         </div>
//     )
// }

// export default AddAnnouncement;
