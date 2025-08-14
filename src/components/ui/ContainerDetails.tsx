import styled from 'styled-components';

const ContainerDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 1em;
    width: 800px;
    height: 500px;
    transition: all 400ms ease-in-out;
  }

  /* When any box is hovered, make all other boxes grayscale */
  .container:hover .box {
    filter: grayscale(100%) opacity(0.4);
    transition: all 400ms ease-in-out;
  }

  .box {
    position: relative;
    transition: all 400ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: grayscale(0%) opacity(1);
    transform: translateY(0);
    overflow: hidden;
    border-radius: 8px;
  }

  /* Next.js Image component styling */
  .box img {
    transition: all 400ms ease-in-out;
  }

  /* The hovered box stays colorful and gets special effects */
  .container .box:hover {
    filter: grayscale(0%) opacity(1) !important; /* Override the container hover effect */
  }

  .container .box:hover img {
    transform: scale(1.05);
  }

  .container:has(.box-1:hover) {
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  }

  .container:has(.box-2:hover) {
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  }

  .container:has(.box-3:hover) {
    grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
  }

  .container:has(.box-4:hover) {
    grid-template-columns: 1fr 1fr 1fr 3fr 1fr;
  }

  .container:has(.box-5:hover) {
    grid-template-columns: 1fr 1fr 1fr 1fr 3fr;
  }

  .box:nth-child(odd) {
    transform: translateY(-16px);
  }

  .box:nth-child(even) {
    transform: translateY(16px);
  }

  /* Maintain the nth-child positioning even on container hover */
  .container:hover .box:nth-child(odd) {
    transform: translateY(-16px);
  }

  .container:hover .box:nth-child(even) {
    transform: translateY(16px);
  }

  /* The hovered box maintains its original position */
  .container .box:hover {
    transform: translateY(-16px) !important; /* For odd children */
  }

  .container .box:nth-child(even):hover {
    transform: translateY(16px) !important; /* For even children */
  }

  .box::after {
    content: attr(data-text);
    position: absolute;
    bottom: 20px;
    background: #000;
    color: #fff;
    padding: 10px 10px 10px 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    transform: translateY(60px);
    opacity: 0;
    transition: all 400ms ease-in-out;
    z-index: 10;
  }

  .box:hover::after {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 400ms;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .container {
      width: 95%;
      height: 300px;
      grid-template-columns: 1fr 1fr 1fr;
    }
    
    .container:has(.box-1:hover),
    .container:has(.box-2:hover),
    .container:has(.box-3:hover),
    .container:has(.box-4:hover),
    .container:has(.box-5:hover) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default ContainerDetails;
