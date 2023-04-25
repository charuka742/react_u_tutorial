import React from 'react';

function SuccessAlert(props) {
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Success!</strong>
      <span className="block sm:inline">{props.message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg className="fill-current h-6 w-6 text-green-500" role="button" viewBox="0 0 20 20">
          <title>Close</title>
          <path d="M14.348 5.652a.999.999 0 1 0-1.414 1.414L11 7.414l-1.934 1.934a.999.999 0 1 0 1.414 1.414L12.414 9l1.934 1.934a.999.999 0 1 0 1.414-1.414L13.828 7l1.52-1.52z"/>
        </svg>
      </span>
    </div>
  );
}

export default SuccessAlert;
