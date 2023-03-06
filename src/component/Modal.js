import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
export default function Modal({ isOpen, setIsOpen, data }) {
    return (
        <>
            {data && <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black-600 bg-opacity-90" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Detail of List
                                    </Dialog.Title>
                                    <div className="flex flex-col gap-4 mt-2">
                                        <div className='flex items-center gap-2'>
                                            <img
                                                alt=""
                                                className='w-32 h-28 rounded-lg'
                                                src={data.imageUrl}
                                            />
                                            <div className='flex flex-col gap-2'>
                                                <span className='text-sm text-primary'>Name: {data.name} </span>
                                                <span className='text-sm text-primary'>address: {data.address} </span>
                                                <span className='text-sm text-primary'>token_standard: #{data.tokenId}</span>
                                            </div>

                                        </div>
                                        <a
                                            href={`https://opensea.io/assets/ethereum/${data.address}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className='text-lg text-white bg-blue-400 flex items-center justify-center outline-none border-none py-2 rounded-md'>
                                            Purchase
                                        </a>

                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>}
        </>
    )
}
