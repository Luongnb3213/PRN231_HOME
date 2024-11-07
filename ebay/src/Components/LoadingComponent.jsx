const LoadingComponent = () => {
  return (
    <div className="fixed inset-0 z-10 bg-stone-900 opacity-80">
      <img
        src="/gif/yy3.gif"
        alt=""
        className="w-20 h-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default LoadingComponent;
