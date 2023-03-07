import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-black font-bold'>Quer levar sua empresa</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00df9a]'>para o próximo nível?</h1>
          <p>
          Aproveite o potencial da tecnologia para criar experiências incríveis e aumentar sua produtividade.
          </p>
          <p>
          Entre em contato conosco hoje mesmo para saber como podemos ajudar a transformar sua visão em realidade!
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Let's Go!</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
