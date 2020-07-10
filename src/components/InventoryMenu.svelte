
<div id="inventory-menu">
  <h2>How will you come?</h2>
  <ul>
    <li><img src="assets/sword.png" alt=""></li>
    <li><img src="assets/bow.png" alt=""></li>
    <li><img src="assets/shield-menu.png" alt=""></li>
    <li><img src="assets/armor.png" alt=""></li>
    <li><img src="assets/apple.png" alt=""></li>
    <li><img src="assets/food.png" alt=""></li>
    <li><img src="assets/star.png" alt=""></li>
  </ul>
</div>


<style lang="scss">
  #inventory-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2.8vw;
    padding-right: 6vw;

    h2 {
      font-size: 1.7rem;
      font-style: italic;
      margin-bottom: 0.5vw;
    }

    ul {
      list-style: none;
      // border-bottom: 0.1vw solid rgba(#efefef, .4);

      li {
        display: inline-flex;
        position: relative;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: opacity .15s ease-in-out;

        width: 2.8vw;
        height: 2.8vw;
        margin-bottom: 0.9vw;
        opacity: 0.4;

        &:first-child {
          margin-left: 1vw;
        }

        &:not(:last-child) {
          margin-right: 1.5vw;
        }

        &:after {
          position: absolute;
          content: "";
          display: block;
          width: 161%;
          border-bottom: 0.1vw solid #efefef;
          bottom: -1vw;
          left: -1vw;
          z-index: 1000000;
        }

        img {
          max-width: auto;
          height: 2.84vw;
        }

        &:hover {
          opacity: 1;
        }
        
      }
    }
  }
</style>