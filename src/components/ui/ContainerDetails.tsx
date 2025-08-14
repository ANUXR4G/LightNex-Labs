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

.container:hover .box {
    filter: grayscale(100%) opacity(0.24);
}

.box {
    position: relative;
    background: var(--img) center center;
    background-size: cover;
    transition: all 400ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: grayscale(0%) opacity(1); /* Imagens começam coloridas */
    transform: translateY(0); /* Corrige o hover para manter a posição inicial */
}

.container .box:hover {
    filter: grayscale(0%) opacity(1);
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
    transform: translateY(-16px); /* Posições ímpares mais altas */
}

.box:nth-child(even) {
    transform: translateY(16px); /* Posições pares mais baixas */
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
}

.box:hover::after {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 400ms;
}
`;

export default ContainerDetails;