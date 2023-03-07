import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
          Kive <span className='font-light'>| Tecnologia</span>
        </h1>
        <p className='py-4'>
          Com uma equipe altamente qualificada e foco na experiência do usuário,
          a Kive é uma excelente opção para quem busca soluções criativas e de
          alta qualidade.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Soluções</h6>
          <ul>
            <li className='py-2 text-sm'>Web</li>
            <li className='py-2 text-sm'>Mobile</li>
            <li className='py-2 text-sm'>UI/UX Design</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Suporte</h6>
          <ul>
            <li className='py-2 text-sm'>Orçamentos</li>
            <li className='py-2 text-sm'>Consultoria</li>
            <li className='py-2 text-sm'>Guias</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Empresa</h6>
          <ul>
            <li className='py-2 text-sm'>Sobre</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Projetos</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='py-2 text-sm'>Verificar contratos</li>
            <li className='py-2 text-sm'>Política de privacidade</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
