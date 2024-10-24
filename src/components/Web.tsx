const Web = () => {
  return (
    <div className="flex flex-col items-end border">
      <div className="flex items-center">
        <p>Nombre de pàgines</p>
        <div className="ps-3 flex items-center">
          <button className="flex justify-center items-center align-middle active:border-orange-500 hover:border-orange-300 size-7 rounded-full border border-gray-400">-</button>
          <p className="px-5 py-2 m-1 border rounded-xl hover:border-gray-400 border-gray-600">1</p>
          <button className="flex justify-center items-center align-middle active:border-orange-500 hover:border-orange-300 size-7 rounded-full border border-gray-400">+</button>
        </div>
      </div>
      <div className="flex items-center">
        <p>Nombre d'idiomes</p>
        <div className="ps-3 flex items-center">
          <button className="flex justify-center items-center align-middle active:border-orange-500 hover:border-orange-300 size-7 rounded-full border border-gray-400">-</button>
          <p className="px-5 py-2 m-1 border rounded-xl hover:border-gray-400 border-gray-600">1</p>
          <button className="flex justify-center items-center align-middle active:border-orange-500 hover:border-orange-300 size-7 rounded-full border border-gray-400">+</button>
        </div>
      </div>
    </div>
  );
};

export default Web;
