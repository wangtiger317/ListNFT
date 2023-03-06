import axios from 'axios';
import { useEffect, useState } from 'react'
import Modal from './Modal';
export default function Card() {
    let [isOpen, setIsOpen] = useState(false);
    const [address, setAddress] = useState("")
    const [listItem, setListItem] = useState();
    const [listData, setListData] = useState([])
    const handleShowModal = (item) => {
        setIsOpen(true);
        setListItem(item)
    }
    const getListNFt = async (address) => {
        const { data } = await axios.get(`https://warehouse.czlabs.io/api1/web3/portfolio/${address}`, {})
        setListData(data.data.collections)
    }
    useEffect(() => {
        getListNFt(address)
    }, [address])
    return (
        <>
            <input
                className='border-2 border-solid py-2 px-3 outline-none rounded-md'
                placeholder='Type your Address'
                onChange={(val) => setAddress(val.target.value)
                }
                type="text" />
            <div className='grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-3'>
                {
                    listData && listData.length > 0 && listData.map((item, index) => (
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
                                    style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', height: '142px', }}
                                />
                                <span className='text-sm text-white truncate'>{item.name}</span>
                            </div>
                            <div className='bg-secondary flex flex-col gap-2 p-3 border-2 border-solid border-gray-300 rounded-b-lg'>
                                <div className='text-xs text-gray-400'>Owner:</div>
                                <div className='text-xs text-white truncate'>
                                    {item.contract_address}
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
