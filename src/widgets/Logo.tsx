export const Logo = () => {
  return (
    <div className="flex gap-4">
      <div>
        <img src="./logo.png" alt="" className="w-[40px] h-[40px]" />
      </div>
      <div>
        <h4 className="font-bold mb-0">REACT SNEAKERS</h4>
        <span className="text-[14px] text-[#9D9D9D]">
          Магазин лучших кроссовок
        </span>
      </div>
    </div>
  );
};
