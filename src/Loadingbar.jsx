function LoadingBar() {

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="w-16 h-16 rounded-full border-t-4 border-b-4 animate-spin" style={{'borderColor':'white'}}></div>
    </div>
    );
  }
  
  export default LoadingBar;