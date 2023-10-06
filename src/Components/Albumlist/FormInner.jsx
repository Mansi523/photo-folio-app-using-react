import React from "react";
import style from "./FormInner.module.css";
import { useEffect } from "react";
const FormInner = ({
  albumname,
  setinnername,
  setinnerurl,
  innername,
  innerurl,
  handleInnerClear,
  handleInnerCreate,
  inneralbum,
  handleUpdateImage,
}) => {
  useEffect(() => {
    if (inneralbum) {
      setinnername(inneralbum.innername);
      setinnerurl(inneralbum.innerurl);
    }
  }, [inneralbum]);

  return (
    <div className={style.box}>
      <div className={style.top}>
        <span>Add Image to {albumname.name}</span>
      </div>
      <div className={style.bottom}>
        <div className={style.left}>
          <input
            type="text"
            placeholder="Tittle"
            required
            value={innername}
            onChange={(e) => setinnername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            required
            value={innerurl}
            onChange={(e) => setinnerurl(e.target.value)}
          />
        </div>
        <div className={style.right}>
          <button className={style.clearbtn} onClick={() => handleInnerClear()}>
            Clear
          </button>
          <button
            className={style.createbtn}
            onClick={() => {
              inneralbum ? handleUpdateImage() : handleInnerCreate();
            }}
          >
            {inneralbum ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormInner;
