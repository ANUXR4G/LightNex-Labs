import React from 'react';
import Image from 'next/image';
import ContainerDetails from './ContainerDetails';
import anurag from '../../../public/anurag.jpg';
import arvindra from '../../../public/arvindra.jpg';

const Container: React.FC = () => {
  return (
    <ContainerDetails>
      <div className="container">
        <div className="box box-1" data-text="Anurag">
          <Image
            src={anurag}
            alt="Anurag"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            quality={100} // Maximum quality
            priority
            unoptimized={false} // Keep optimization enabled
          />
        </div>
        <div className="box box-2" data-text="Arvindra">
          <Image
            src={arvindra}
            alt="Arvindra"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            quality={100}
          />
        </div>
       
      </div>
    </ContainerDetails>
  );
};

export default Container;
