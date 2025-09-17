    const modalFunc = () =>{
        const modal =document.querySelector('.cart-modal__overlay')
    const cartBtn = document.querySelector('#cart-button')


    const openModal =()=>{
        modal.classList.add('open')
    }

    const closeModal =()=>{
        modal.classList.remove('open')
    }

    cartBtn.addEventListener('click', ()=> {
        openModal()
    })

    modal.addEventListener('click', (event) =>{
        console.log(event.target);
        if (
            event.target.classList.contains('cart-modal__overlay') ||
            event.target.closest('.cart-modal__header--close')
        ){
            closeModal()
        }
    })
    }

    const restsFunc =() =>{
        const container = document.querySelector('#rests-container')
        container.innerHTML = ''

        const restArray = [
            {
                id:0,
                title: 'Пицца плюсXYI',
                time: 50,
                raiting: 4.5,
                price:900,
                type: 'Пицца',
                image: 'image.jpg'
            },

            {
                id:1,
                title: 'Тануки',
                time: 50,
                raiting: 4.5,
                price:900,
                type: 'Пицца',
                image: 'image-1.jpg'
            },

            {
                id:2,
                title: 'FoodBand',
                time: 50,
                raiting: 4.5,
                price:900,
                type: 'Пицца',
                image: 'image-2.jpg'
            },
            
            {
                id:3,
                title: 'Жадина-пицца',
                time: 50,
                raiting: 4.5,
                price:900,
                type: 'Пицца',
                image: 'image-3.jpg'
            },

            {
                id:4,
                title: 'Точка еды',
                time: 50,
                raiting: 4.5,
                price:900,
                type: 'Пицца',
                image: 'image-4.jpg'
            },

            {
                id:5,
                title: 'PizzaBurger',
                time: 50,
                raiting: 4.5,
                price:900,
                type: 'Пицца',
                image: 'image-5.jpg'
            }
        ]


        const loading =() =>{
            container.innerHTML = '<p style="width:100% text-align:center;"> Зaгрузка...</p>'
        }
    

        const randerRests = (array) => {
            container.innerHTML = ''

            array.forEach((card) => {
                container.insertAdjacentHTML('beforeend',`
                                <a href="./goods.html?id=${card.id}" class="products-card">
                                    <div class="products-card__image">
                                        <img src="./images/rests/${card.image}" alt="${card.image}">
                                    </div>
                                    <div class="products-card__description">
                                        <div class="products-card__description-row">
                                            <h4 class="products-card__description--title">${card.title}</h4>
                                            <div class="products-card__description--bage">${card.time}</div>
                                        </div>
                                        <div class="products-card__description-row">
                                            <div class="products-card__description--info">
                                                <div class="products-card__description--info--raiting">
                                                <img src="./images/icons/star.svg">
                                                ${card.raiting}
                                                </div>
                                                <div class="products-card__description--info--price">
                                                    ${card.price}
                                                </div>
                                                <div class="products-card__description--info--group">
                                                    ${card.type}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                    `)
                
                })  

            }
        if (container){
            loading()
            
            setTimeout(()=> {
                randerRests(restArray)
            },1000)
        }
    }



    modalFunc()
    restsFunc()