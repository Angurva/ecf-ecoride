import React from 'react';

import Image from 'next/image';

import Mountains from '../../../public/assets/road.jpg'
import Nature from '../../../public/assets/nature.jpg'

export default function Card() {

    const articles = [
        {
            id:1, 
            title:"Qui sommes-Nous?", 
            subtitle:"Présentation", 
            content: `orem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias maxime tenetur, omnis, velit, placeat sed ipsum eius totam corrupti magni possimus quisquam eligendi. Enim quo ipsam magni quos amet.
            Reiciendis sequi eum earum nostrum dolorum consectetur! Voluptatem necessitatibus ducimus voluptate? Amet quibusdam laborum minus impedit nisi mollitia ut dicta cum sit atque quisquam dolorum aut deleniti, facere enim numquam!
            Error consequatur voluptas consectetur est repellendus sed eligendi unde, pariatur tempora, asperiores nostrum aut tempore fuga! Velit eius dolorem molestiae magni harum autem ad nostrum, alias est, officiis explicabo et.`,
            picture: Mountains,
            altPicture: "image road mountains"
        },
        {   id:2, 
            title:"Nos Valeurs", 
            subtitle:"L'écologie notre préoccupation, le covoiturage notre responsabilité", 
            content:` Facilis possimus rerum est, at pariatur natus inventore culpa laborum eum! Ipsam accusantium, unde nemo in repudiandae distinctio fuga asperiores nihil magni impedit neque nostrum tempora obcaecati, enim eius dolor.
            Dolore odio facilis repudiandae delectus aperiam tempora nihil temporibus a, doloribus ea atque quos maiores veritatis necessitatibus. Dolore dignissimos temporibus et possimus, esse quidem error excepturi veniam voluptatem totam voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore quis quia in eaque rem aspernatur minima quos natus. Nobis placeat libero ducimus maxime eos sequi aperiam, esse odio laboriosam.
            Natus, voluptate! Aspernatur numquam tempore quaerat mollitia. Fuga hic, cumque laudantium ab velit officia itaque facilis at voluptatem consectetur modi voluptate nam ad provident, illum earum eligendi labore doloribus minus.`,
            picture: Nature,
            altPicture: "image ecology"
        
        }
    ]

  return (
    <div className="w-full flex flex-col gap-5">
        {
        articles.map((art)=>(
            <article className="box-border border border-sky-600 bg-white w-full text-gray-900 rounded-md" key={art.id}>
                <div className={`md:grid md:grid-cols-12 flex ${art.id % 2 ? "flex-col" : "flex-col-reverse"} `}>
                    {
                        art.id % 2 
                        ?
                        <>
                            <div className="md:col-span-4">
                                <Image
                                    src={art.picture}
                                    alt={art.altPicture}
                                />
                            </div>
                            <div className="md:col-span-8 flex flex-col items-center p-3 gap-2">
                                <h1 className="md:text-2xl text-xl">{art.title}</h1>
                                <h6 className="text-slate-400 text-sm md:text-lg italic">{art.subtitle} </h6>
                                <p className="text-[14px]">{art.content}</p>
                            </div>
                        </>
                        :
                        <>
                            <div className="md:col-span-8 flex flex-col items-center p-3 gap-2">
                                <h1 className="md:text-2xl text-xl">{art.title}</h1>
                                <h6 className="text-slate-400 text-sm md:text-lg italic">{art.subtitle} </h6>
                                <p className="text-[14px]">{art.content}</p>
                            </div>
                            <div className="md:col-span-4">
                            <Image
                                src={art.picture}
                                alt={art.altPicture}
                            />
                            </div>
                        </>
                       
                    

                    }
                   

                </div>
                

            </article>

        ))
        }


    </div>
  )
}
