import Card from '../Card/index';
import style from './Cards.module.css'
export const Cards = ({characters})=>{return(
<div>{characters.map((item)=>{   
   return (
   <div className={style.container}key={item.id}>
      <Card
      image={item.image}
      name={item.name}
      teams={item.tams}
      />
   </div>
   );
   }
   )}
</div>
);
};

export default Cards;