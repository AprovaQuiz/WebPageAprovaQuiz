import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Styles for Navigation module
import 'swiper/css/pagination'; // Styles for Pagination module
import { Navigation } from 'swiper/modules';
import { Link } from '@remix-run/react';
import { useRef } from 'react';
import { NavigationOptions } from 'swiper/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const dataCadernos = [
    {
        title: "Ciências da Natureza",
        imgSrc: "https://blog.imaginie.com.br/wp-content/uploads/2022/01/Ciencias-da-Natureza-e-suas-tecnologias.png"
    },
    {
        title: "Ciências Humanas",
        imgSrc: "https://fach.ufms.br/files/2020/06/IMG_0311.jpg"
    },
    {
        title: "Matemática",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCC8_29yBICqLj0a64yeAoffBv4j3012N5A&s"
    },
    {
        title: "Linguagens",
        imgSrc: "https://static.preparaenem.com/conteudo_legenda/8dbfcd8020e017e7942244a772b8b147.jpg"
    },
    {
        title: "Todas as Matérias",
        imgSrc: "https://i0.wp.com/radio.ufpa.br/wp-content/uploads/2019/02/Linguagens&C%C3%B3digos.png?fit=775%2C404&ssl=1",
    },
]


export function Carousel() {

    const data = dataCadernos

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <Swiper
            modules={[Navigation]} // Register modules here
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
                const navigation = swiper.params.navigation as NavigationOptions;
                if (navigation) {
                    navigation.prevEl = prevRef.current;
                    navigation.nextEl = nextRef.current;
                }
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,

                },
            }}
            pagination={{ clickable: true }}
        >
            {data.map((data) => {
                return (
                    <SwiperSlide key={data.title}>
                        <Link to={`/Materias/?pertence=${data.title}`}>
                            <div className="col-md-11 mb-4">
                                <div className="card border-0">
                                    <img src={data.imgSrc} alt={data.title} className="card-img-top img-responsive" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Questões de {data.title}</h5>
                                        {data.title != "Toda as Matérias" &&
                                            <h6 className="card-subtitle text-muted  py-4">Questões apenas de matérias de {data.title}.</h6>
                                        }
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                )
            })}

            <button ref={prevRef} className="custom-swiper-button prev"><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button ref={nextRef} className="custom-swiper-button next"><FontAwesomeIcon icon={faChevronRight} /></button>
        </Swiper>

    )
}