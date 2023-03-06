import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import data from "../data.json"
import Modal from './Modal';
export default function Card() {
    console.log(data);
    let [isOpen, setIsOpen] = useState(false);
    const [listItem, setListItem] = useState()
    const handleShowModal = (item) => {
        setIsOpen(true);
        setListItem(item)
    }
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-3'>
                {
                    data.map((item, index) => (
                        <div
                            onClick={() => handleShowModal(item)}
                            className='flex flex-col cursor-pointer'>
                            <div
                                className='bg-primary flex flex-col gap-2 p-3 rounded-t-lg'
                                key={index}
                            >
                                <div
                                    onClick={() => handleShowModal(item)}
                                    className='rounded w-full'
                                    style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', height: '142px', }}
                                />
                                <span className='text-sm text-white'>{item.name}</span>
                            </div>
                            <div className='bg-secondary flex flex-col gap-2 p-3 border-2 border-solid border-gray-300 rounded-b-lg'>
                                <div className='text-xs text-gray-400'>Owner:</div>
                                <div className='text-xs text-white truncate'>
                                    {item.address}
                                </div>
                            </div>

                        </div>

                    ))
                }


            </div>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data={listItem}
            />
        </>

    )
}
