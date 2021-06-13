import React from "react";

export default function CatList(props) {
  const renderPics = () => {
    return props.catPics.map((cat) => (
      <img key={cat.id} src={cat.url} alt="cat pics" />
    ));
  };
  return (
    <div>
      {props.loading ? <div>LOADING....</div> : <div>{renderPics()}</div>}
    </div>
  );
}
