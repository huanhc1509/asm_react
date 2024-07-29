
const Menu = () => {
  return (
    <div className="grid grid-cols-4 gap-28 max-w-screen-lg mx-auto my-8">
      <div className="bg-[#D2E8CD] flex items-center p-2 rounded">
        <img src="/src/assets/img/category-1.png" alt="" className="h-8 pr-2" />
        <h3>Eckige Töpfe</h3>
      </div>
      <div className="bg-[#D2E8CD] flex items-center p-2 rounded">
        <img src="/src/assets/img/category-2.png" alt="" className="h-8 pr-2" />
        <h3>Runde Töpfe</h3>
      </div>
      <div className="bg-[#D2E8CD] flex items-center p-2 rounded">
        <img src="/src/assets/img/category-3.png" alt="" className="h-8 pr-2" />
        <h3>Untersetzer</h3>
      </div>
      <div className="bg-[#D2E8CD] flex items-center p-2 rounded">
        <img src="/src/assets/img/category-4.png" alt="" className="h-8 pr-2" />
        <h3>Pflanzschalen</h3>
      </div>
    </div>

  )
}

export default Menu