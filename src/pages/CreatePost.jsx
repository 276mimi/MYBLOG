import React, { useState, useContext } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { PostContext } from '../Components/PostContext';


export default function CreatePost() {
  const { addPost } = useContext(PostContext);
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  const modules = {
    toolbar: [
      [{'header': [1,2,3,4,5,6, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote' ],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']  
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const POST_CATEGORIES = ['Agriculture', 'Business', 'Education', 'Entertainment', 'Art', 'Investment', 'UncategoriZed', 'Weather']

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new post object
    const newPost = {
      id: Date.now(),
      title,
      category,
      description,
      image,
    };

    // Add the new post to the context
    addPost(newPost);

    // Reset form fields
    setTitle('');
    setCategory('Uncategorized');
    setDescription('');
    setImage(null);
  };

  return (
    <section className='create-post'>
      <div className="container">
        <h2>Create Post</h2>
        <p className='form-err-msg'>this is the error message</p>

        <form className='form create-post-form' onSubmit={handleSubmit}>
          <input type="text" placeholder='tittle' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>
          
            <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
            <input type="file"  onChange={e => setImage(e.target.files[0])} accept='image/png, image/jpg, image/jpeg'/>
            <button type='submit' className='btn-primary'>Create</button>
        </form>
      </div>
    </section>
  )
}



