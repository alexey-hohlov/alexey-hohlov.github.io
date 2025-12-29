import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { skillsData } from '@/data/skillsData';

import SkillCard from '../SkillCard/SkillCard';
import '@/styles/swiper.scss';
import styles from './SkillsCarousel.module.scss';

const SkillsCarousel: React.FC = () => {
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={'auto'}
        spaceBetween={35}
        freeMode={true}
        speed={2000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        loop={true}
      >
        {skillsData.map(card => (
          <SwiperSlide key={card.title}>
            <SkillCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsCarousel;
