import React from 'react';
import { AiOutlineSmile } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

function Post({ index }) {
  return (
    <div className='border-1 flex w-full flex-col overflow-hidden  rounded-lg border border-gray-400 '>
      <div className='flex justify-between space-x-2 bg-white  py-1 px-2 '>
        <div className='flex items-center space-x-2 '>
          <div className='h-10 w-10 rounded-full border-2 border-purple-400 bg-gray-600'></div>
          <div>username</div>
        </div>
        <div className='flex select-none items-center'>
          <BsThreeDotsVertical className='cursor-pointer text-slate-700' />
        </div>
      </div>
      <div className='aspect-square h-full w-full bg-slate-900'></div>
      <div className='flex justify-between p-2 '>
        <div className='flex space-x-2'>
          <div>Like</div>
          <div>comment</div>
          <div>share</div>
        </div>
        <div>bookmark</div>
      </div>
      <div className='px-2'>Likes</div>
      <div>
        <div className='flex flex-col space-y-1'>
          {new Array(3).fill(0).map((_, i) => (
            <div key={i} className='flex items-center space-x-2 px-2'>
              <div className='font-medium text-slate-900'>Kagiso</div>
              <div className='text-slate-800'>
                Nice picture man.Please take me with you next time..LoL🤣
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='px-2 py-1'>3 hours ago</div>
      <div className='flex items-center justify-center space-x-2 border-t-[1px] p-2'>
        <div>
          <AiOutlineSmile size={25} className='text-slate-700' />
        </div>
        <div className='w-full'>
          <textarea
            type='text'
            name={`comment ${index}`}
            id={`comment ${index}`}
            className='h-8 w-full resize-y border  px-1 text-justify text-slate-800 outline-none'
            rows={1}
            placeholder='Add a comment...'
          />
        </div>
        <div>
          <button>Post</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
