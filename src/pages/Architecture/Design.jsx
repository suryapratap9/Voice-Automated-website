import "./design.css"
import photo1 from "./model.jpg"
import photo2 from "./model2.jpg"

const Design = () => {
  return (
    <div className="mainDiv">
        <h1>Model Architecture</h1>
        <img src={photo1} />
        <img className="photo2" src={photo2} />
    </div>
  )
}

export default Design