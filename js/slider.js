
class Slider {
    constructor() {
        this.slides = [
            {
                imgUrl: 'img/banners/airpods_pro_banner.png',
                title: 'AirPods Pro',
            },
            {
                imgUrl: 'img/banners/mac_book_banner.jpg',
                title: 'Mac Book Pro',
            },
            {
                imgUrl: 'img/banners/apple_tv_banner.png',
                title: 'Apple TV',
            },
            {
                imgUrl: 'img/banners/watch_banner.jpg',
                title: 'Apple Watch 6',
            },
            {
                imgUrl: 'img/banners/ipad_air_banner.jpg',
                title: 'IPad Air',
            },
            {
                imgUrl: 'img/banners/iphone_12_banner.jpg',
                title: 'IPhone 12',
            },
            {
                imgUrl: 'img/banners/air_pods_max_banner.jpg',
                title: 'AirPods Max',
            },
        ]
        this.renderSlides()
    }


    renderSlide(item) {

        const banner = document.createElement('div')
        banner.className = 'banner';
        banner.style.backgroundImage =`url('${item.imgUrl}')`;
        banner.innerHTML = `
        <div class="mainForSlider">
            <div class="mainForSlider__title">
                <h1>${item.title}</h1>
            </div>
            <button>Add to cart</button>
        </div>
    `

        return  banner;

    }

    renderSlides() {
        const container =  document.querySelector('.slider.single-item');
        container.innerHTML = '';
        this.slides.forEach(slide => {
            const slideElem = this.renderSlide(slide)
            container.appendChild(slideElem)
        })
    }
}


export const slider = new Slider()