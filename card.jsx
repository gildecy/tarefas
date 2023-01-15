import './App.css';

export function Card({name,time}){
  return(
    <div className='cartão'>
      <strong>{name}</strong>
      <small> {time}</small>
    </div>
  )
}
export default Card;