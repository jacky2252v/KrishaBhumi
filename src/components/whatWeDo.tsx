import React, { useEffect, useState } from 'react'

const jsonData = [
  {
    id: 1,
    name: 'Hybrid Coating',
    image: 'img/hybridCoating.jpg',
    desct: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, obcaecati. Aperiam, quis quod harum maxime fugit alias corporis vero unde eaque officiis ipsum aliquid repellat, officia corrupti neque commodi maiores.'
  },
  {
    id: 2,
    name: 'Building Painting',
    image: 'img/buildingPainting.jpg',
    desct: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, obcaecati. Aperiam, quis quod harum maxime fugit alias corporis vero unde eaque officiis ipsum aliquid repellat, officia corrupti neque commodi maiores.'
  },
  {
    id: 3,
    name: 'Water Proofing',
    image: 'img/waterproofing.jpg',
    desct: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, obcaecati. Aperiam, quis quod harum maxime fugit alias corporis vero unde eaque officiis ipsum aliquid repellat, officia corrupti neque commodi maiores.'
  }

]

const whatWeDo = () => {

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-5xl'>What we do?</h1>
        <p className='text-xl'>We provide the following services</p>
        {
          jsonData.map((data) => (
            <div key={data.id} className="grid grid-cols-3 gap-2 m-1">
              <div className="flex flex-col items-center justify-between m-3 border-2 border-gray-300 p-3 rounded">
                <div>
                  <img src={data.image} alt={data.name} className='rounded' />
                </div>
                <div>
                  <h2 className='text-3xl'>{data.name}</h2>
                  <p>{data.desct}</p>
                </div>
                <div>
                  <button className='bg-blue-500 text-white p-2 rounded w-full'>
                    Know More!
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default whatWeDo
