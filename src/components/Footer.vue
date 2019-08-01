<template>
  <footer>
    <div class="footer-container">
      <p>Copyright</p>
      <a class="symbol" rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img target="_blank" src="../assets/cc_symbol.svg" /></a>
    </div>
  </footer>  
</template>

<style lang=scss>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #d8eaf5;
}

.footer-container {
  margin: auto;
  width: 800px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #ff3b53;

  p, .symbol {
    padding-right: 10px;
    img {
      vertical-align: middle;
    }
  }
}
</style>
