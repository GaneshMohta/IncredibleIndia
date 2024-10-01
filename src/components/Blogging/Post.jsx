import React, { useState, useMemo, useCallback, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr';
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Post() {
  const [Title, setTitle] = useState('');
  const [image, setTitleFile] = useState('');
  const [filePreview, setFilePreview] = useState('');
  const [QuillContent, setQuillContent] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const quillRef = useRef(null);
  const navigate = useNavigate();

  const category = [
    "States",
    "Heritage",
    "Innovation",
    "Cultures",
    "Taste",
    "Others",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== value));
    }
  };

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const imageUrl = reader.result;
        const quillEditor = quillRef.current.getEditor();
        const range = quillEditor.getSelection(true);
        quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
      };

      reader.readAsDataURL(file);
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font"
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setTitleFile(selectedFile);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setFilePreview(fileReader.result);
      };
      fileReader.readAsDataURL(selectedFile);
    }
    else{
      alert('upload a valid image please');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
      formData.append("Title",Title);
      formData.append("image",image);
      formData.append("QuillContent",QuillContent);
      formData.append("selectedCategories",selectedCategories);


    // const formData = {
    //   Title,
    //   image,  // This will now be the file name
    //   QuillContent,
    //   selectedCategories
    // }

    try {
      console.log("Form ", formData);
      const token = localStorage.getItem('token');

      const response = await axios.post('http://localhost:3000/blog/create', formData, {
        headers: {
          "Content-Type": "multipart/form-data" ,
          Authorization: `Bearer ${token}`
        }
      });
      console.log("res", response.data);
      navigate('/blogs');
    } catch (error) {
      console.error("Error uploading the post:", error);
    }
  };

  return (
    <div className='bg-slate-50 h-auto pb-28'>
      <div className='flex justify-between p-2 aatulya-header'>
        <div className='flex gap-2'>
          <Link to='/blogs'><span className='text-slate-950 relative top-1 hover:text-slate-950 duration-300'><BsArrowLeftShort /></span></Link>
          <h3>Aatulya Bharat</h3>
        </div>
      </div>

      <p className='text-center font-extrabold text-2xl text-gray-700 font-serif py-4'>
        Make a Blog for India
      </p>
      <form className='p-4 m-4 mx-10' onSubmit={handleSubmit}>
        <input
          type='text'
          name='Title'
          id='Title'
          className='font-bold text-2xl list-none border-none bg-transparent mb-4 w-auto'
          placeholder='Title'
          value={Title}
          autoFocus={true}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='file'
          className='hidden'
          id='file'
          accept='image/*'
          onChange={handleFileChange}
        />
        <label htmlFor='file' className='items-center cursor-pointer text-4xl'>
          <GrAddCircle className='hover:text-blue-900 duration-300' />
        </label>
        {image && (
          <div className='mt-4'>
            <img src={filePreview} alt='Selected File Preview' className='w-full max-w-xs' />
          </div>
        )}

        <ReactQuill
          ref={quillRef}
          value={QuillContent}
          onChange={setQuillContent}
          modules={modules}
          formats={formats}
          className='text-lg border-none bg-transparent font-normal w-4/5 h-auto focus:outline-none resize-none mt-4'
        />
        <br />
        <label>Category:</label>
        <button type="button" onClick={toggleDropdown} className="dropbtn w-24 text-xs bg-gray-500 rounded-md h-12">
          Select Categories
        </button>
        {isOpen && (
          <div className='dropdown-content'>
            {category.map((cat) => (
              <label key={cat}>
                <input
                  type='checkbox'
                  value={cat}
                  onChange={handleCheckbox}
                  checked={selectedCategories.includes(cat)}
                />
                {cat}
              </label>
            ))}
          </div>
        )}
        <br />
        <button type='submit' className='mt-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300'>
          Publish
        </button>
      </form>
    </div>
  );
}
