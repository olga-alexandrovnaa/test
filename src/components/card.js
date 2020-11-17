import React from "react";
import { useState } from 'react';
import './card.css';


export default function Card() {
    const [count, setCount] = useState(1);


    return (
        
        <div  class = "flex-col md:flex-row flex min-h-screen mt-0 justify-center align-center">
            <div class="lg: px-6 py-6">
            <img class = "max-w-lg soverflow-hidden rounded-lg shadow-lg" src="https://img3.goodfon.ru/original/3000x2000/d/ab/myaso-ovoschi-buzhenina.jpg" alt="Sunset in the mountains"/>
            </div>
            
            <div class=" md: px-6 py-4">
                <div class="font-bold text-xl text-left font-extrabold text-3xl flex-row">
                    <table class="w-full">
                        <tr>
                       <th>Мясо с овощами</th>
                       <th class = "text-base text-right pl-12 m-0">
                            ₽ 141
                        </th> 
                       </tr>
                       <tr>
                           <img class="w-20" src="https://zaborkin.ru/img/calend/4_5.png"/>
                       </tr>
                       <tr>
                           <th> <p class="text-gray text-left text-xs font-thin">
                            20 отзывов
                            </p>
                            </th>
                           <th>
                        <div class="flex mb-4 items-right overflow-x-scroll md:overflow-x-auto">
                        <button class="text-xs p-2 ml-4 mr-2 border-2 text-grey ">Убрать лук</button>
                        <button class="text-xs p-2 ml-2 border-2 ">Без майонеза</button>
                        <button class="text-xs p-2 ml-2 border-2 bg-black border-black text-white">Острее</button>
                        </div>
                        </th>
                        </tr>
                    </table>
                </div>
                <div class="">
                <p class="p-3 text-white bg-black text-left font-extrabold text-2xl">
                Описание
                </p>
                <p class=" p-3 text-white bg-black text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                
                <p class="p-3 text-white bg-black text-left font-thin">
                425 gr
                </p>
                <p class="fixed bottom-0 p-3 text-white bg-black text-left md:static ">
                <div>
                <button onClick={() =>  setCount(()=> count!==1 ? count - 1 : 1) } type="button" class="border w-50 border-white-500 bg-white text-black rounded-md px-4 py-2 mr-2 transition duration-500 ease select-none hover:bg-white-600 focus:outline-none focus:shadow-outline" >
                -
                </button>
                {count}
                <button onClick={() => setCount(count + 1)} type="button" class="border w-50 border-white-500 bg-white text-black rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white-600 focus:outline-none focus:shadow-outline" >
                +
                </button>
                
                <button type="button" class="border w-50 border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" >
                Добавить в корзину
                </button>

                </div>
                </p>
                </div>
            </div>
          
            
          
        </ div >
            
        
        
    );
}
