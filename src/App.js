import Card from './component/Card';

function App() {
  return (
    <div className="flex flex-col gap-4 max-w-full xl:max-w-7xl px-3 md:px-0 w-full mx-auto my-10  xl:my-20">
      <div className='text-2xl text-start'>
        Lists of NFT
      </div>
      {/* list of nfts */}
      <Card />
    </div>
  );
}

export default App;
