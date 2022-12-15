import React from 'react';
import Header from '../Header';
import Post from '../Post';

function Feed() {
  return (
    <div className='h-full w-full bg-[#FAFBFB]'>
      <Header />
      <div className='mx-auto grid  w-full max-w-screen-lg grid-cols-3 gap-6'>
        <div className='col-span-2 mt-12 flex w-full flex-col gap-y-4 '>
          <div className=''>
            <section className='border-1 flex space-x-4 overflow-x-scroll rounded-t-lg border border-gray-400 bg-white p-4'>
              {new Array(10).fill(0).map((_, i) => (
                <div
                  key={i}
                  className='h-14 w-14 flex-none rounded-full  bg-gray-600 ring-2 ring-purple-700 ring-offset-2'
                />
              ))}
            </section>
          </div>
          <section className='flex flex-col gap-y-7'>
            {new Array(10).fill(0).map((_, index) => (
              <Post key={index} index={index} />
            ))}
          </section>
        </div>
        <div className='fixed right-[10%] max-w-sm'>
          <div className='flex'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            mollitia culpa eos ad deserunt, praesentium ipsum incidunt voluptas,
            facere magni illo aspernatur temporibus! Assumenda pariatur, quae
            distinctio iusto culpa quod aut, quibusdam iure qui maxime cumque
            necessitatibus consectetur accusantium cupiditate saepe minus. Eius
            voluptatem, placeat nobis porro, obcaecati soluta tenetur maxime, a
            ratione temporibus sunt alias perferendis iusto! Temporibus
            consequatur, aliquid ratione atque voluptate rerum qui vel excepturi
            sunt earum cupiditate recusandae nulla cumque magni. Nam eligendi
            neque nostrum voluptates? Tenetur natus provident tempora dolorem
            iusto ea quam in quo accusantium magni architecto, fuga hic fugit
            repudiandae? Impedit necessitatibus dolore tempore, cum praesentium
            temporibus commodi quasi minus nam, vero fugiat non nostrum. Veniam,
            ex et? Suscipit, itaque. Id ad consectetur voluptates vitae quidem
            officiis magni. Quo ipsum sunt veritatis aliquam modi commodi
            dolore, repellendus officiis excepturi? Eligendi, placeat
            consequuntur porro similique tempora architecto officiis itaque,
            cupiditate accusantium, error temporibus aut.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
