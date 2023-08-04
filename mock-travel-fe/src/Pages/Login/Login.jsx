import { Button, TextField } from '@mui/material'
import React from 'react'
import "./Login.scss"
import useResize from '../../hook/useResize'
import { getPosts } from './../../Api/postService';

export default function Login() {

    const size = useResize();

    const handleGetPost = async () =>{
      const res = await getPosts();
      console.log(res);
    }
  return (
    <div className='container'>
        {size.width > 768 ? <div className='image'>
            <img src='assets/image/1.jfif' alt=''/>
        </div> : null}

        <div className='login'>
        <TextField label="Size" id="outlined-size-normal" defaultValue="Normal" />
        <TextField label="Size" id="outlined-size-normal" defaultValue="Normal" />
        <Button variant="contained" onClick={handleGetPost}>Login</Button>
        </div>
    </div>
  )
}

