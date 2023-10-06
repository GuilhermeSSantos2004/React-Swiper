import {useState,useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import styles from '../routes/estilo.module.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


function Home (){
  //Hook- useState
  const [slidePreview, setSlidePreview]=useState(1);

  // criando o objeto de imagens
  const imagens =[

    {id:'1', image: './src/assets/img1.jpg'},
    {id:'2', image: './src/assets/img2.jpg'},
    {id:'3', image: './src/assets/img3.jpg'},
  ];
  //criando o hook useEfect - efeito colateral

  useEffect(()=>{
    //criar a função de responsividade no slideshow
    function handleResize(){
      if(window.innerWidth <720){
        setSlidePreview(1);
      }else{
        setSlidePreview(2);
      }
    }
    //chamando a função 
    handleResize();
    //evento vai modificar toda que diminuir a página
    window.addEventListener('resize',handleResize);

    //como estamos usando o useEffect é bom sair do evento e
    //desmontarmos para não perder performace
    return ()=>{
      window.removeEventListener('resize', handleResize)
    }
    //retornando um array vazio
  },[])


  return(
    <section>
      <Swiper
      slidePreview={slidePreview}
      pagination={{clickable:true}}
      navigation
      >
        {imagens.map((item)=>
          <SwiperSlide key={item.id}>
            <img src={item.image} alt='slide' className={styles.slideItem}/>
          </SwiperSlide>
        )}

      </Swiper>

    
    </section>
  )
}
export default Home