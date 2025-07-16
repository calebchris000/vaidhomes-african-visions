const TrustedBy = () => {
  return (
    <div className="z-10 mt-16">
      <div className="w-full px-4">
        <div className="backdrop-blur-md p-6">
          <p className="text-center mb-4 text-sm">
            Trusted by Leading Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="text-black text-sm border border-black/20 px-4 py-2 rounded">
              Taf Africa Global
            </div>
            <div className="text-black text-sm border border-black/20 px-4 py-2 rounded">
              Zylus Group
            </div>
            <div className="text-black text-sm border border-black/20 px-4 py-2 rounded">
              Ondo State Government
            </div>
            <div className="text-black text-sm border border-white/20 px-4 py-2 rounded">
              + 17 More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
