<div id="bottom" >
Camino a Xicalco 26, San Andrés Totoltepec, Tlalpan, 14400 Ciudad de México, CDMX, México
</div>

<style lang="scss">
  #bottom {
    grid-area: bottom;
    background-color: rgba(2, 2, 2, 0.6);

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-top: 2px solid rgba(255, 255, 255, 0.3);

    display: flex;

    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-style: italic;
    padding: 1vw;
  }

@media only screen and (max-width: 768px) {
  #bottom {
    grid-template-columns: 1fr;
    font-size: 1.5rem;
    padding: 1vh;
  }
}
</style>