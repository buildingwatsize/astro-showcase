const DEFAULT_MESSAGE =
  "ขณะนี้อยู่ในระหว่างปรับปรุงระบบชั่วคราว ขออภัยในความไม่สะดวก";
const MaintenanceBox = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black p-8 text-white">
      <div className="text-center text-2xl font-bold ring-4 ring-yellow-300 p-8">
        {`${import.meta.env.MAINTENANCE_MESSAGE ?? DEFAULT_MESSAGE}`}
      </div>
    </div>
  );
};

export default MaintenanceBox;
