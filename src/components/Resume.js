import React from "react";

function Resume() {
    // Function will execute on click of button
    const onButtonClick = () => {
      // using Java Script method to get PDF file
      fetch('testpdf.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'testpdf.pdf';
              alink.click();
          })
      })
  }
  return (
      <>
          <center>
              
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"  onClick={onButtonClick}>
                  RESUME
              </button>
          </center>
      </>
  );
};
export default Resume;
