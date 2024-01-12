export default function(props){
  const images = props.name
    return(
            images.map(image=>{
              return(
                <div key={image.id} className="column">
                  <img src={image.img} alt=""></img>
                </div>
              )
            })
    )
}