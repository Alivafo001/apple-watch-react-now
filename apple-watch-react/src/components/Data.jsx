import React from "react";
import LogoDot from '../img/Group 2.png'
import Btn from "./Btn";

function Data() {
    const Arr =[
        {
            id: 1,
            title: 'Know your runs. In and out.',
            text: `Train smarter with more in-run stats. Want to compare a run to your
            last five? Just swipe left. Mark splits by selecting pause or using
            gestures, like tapping the screen or double-clicking the side button.
            And get a full post-run report, including elevation.`,
            img: LogoDot,
        },
        {
            id: 2,
            title: 'Know your runs. In and out.',
            text: `Train smarter with more in-run stats. Want to compare a run to your
            last five? Just swipe left. Mark splits by selecting pause or using
            gestures, like tapping the screen or double-clicking the side button.
            And get a full post-run report, including elevation.`,
            img: LogoDot,
        },
        {
            id: 3,
            title: 'Know your runs. In and out.',
            text: `Run every Sunday and see how long you can keep your streak alive. Fuel your run with exclusive Nike+ Run Club playlists on Apple Music.`,
            link: <Btn>Learn more</Btn>,
        }
    ]
  return (
    <>
    <div className="cards">
   {
     Arr.map((item , index)=>{
       return(
        <div className="card" key={item.id}>
        <h2 className="card__title">{item.title}</h2>
        <p className="card__text">
          {item.text}
        </p>
        {item.img ? <img src={item.img} alt="card__img" className="card__img" /> : null}
        {item.link ? item.link : null}
      </div>
       )
     })
   }
   </div>

      {/* <div className="card">
        <h2 className="card__title">Know your runs. In and out.</h2>
        <p className="card__text">
          Train smarter with more in-run stats. Want to compare a run to your
          last five? Just swipe left. Mark splits by selecting pause or using
          gestures, like tapping the screen or double-clicking the side button.
          And get a full post-run report, including elevation.
        </p>
        <img src={LogoDot} alt="card__img" className="card__img" />
      </div> */}
    </>
  );
}

export default Data;
