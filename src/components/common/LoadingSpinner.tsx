export default function LoadingSpinner() {
  let circleCommonClasses = "h-2.5 w-2.5 rounded-full bg-blue-700";

  return (
    <div className="flex">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div
        className={`${circleCommonClasses} mr-1 animate-bounce animate[200]`}
      ></div>
      <div
        className={`${circleCommonClasses} animate-bounce animate[400]`}
      ></div>
    </div>
  );
}
