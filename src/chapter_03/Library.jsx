import React  from "react";
import Book from "./Book";
import Book1 from "./Book1";

function Library(props) {
  return (
      <div>
        <Book1 name="처음 만난 파이썬" numOfPage={5000}></Book1>
        <Book1 name="처음 만난 AWS" numOfPage={400}></Book1>
        <Book1 name="처음 만난 리액트" numOfPage={500}></Book1>
      </div>
  );
}
export default Library;