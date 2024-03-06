<template>
  <footer>
        <div class="container">
            <div class="footer_info">
                <a href="index.html" class="logo">
                    <img src="../assets/Logo.svg" alt="logo"/>
                    <h1>Interno</h1>
                </a>
                <p>It is a long established fact that a reader will be distracted lookings.</p>
                <a href="https://twitter.com"><img src="../assets/twitter.png" alt="twitter-logo" /></a>
                <a href="https://www.linkedin.com"><img src="../assets/linkedin.png" alt="linkedin-logo" /></a>
            </div>
            <div class="pages">
                <h3>Pages</h3>
                <a href="index.html">Home</a>
                <a href="#">Project</a>
                <a href="#">Blog</a>
            </div>
            <div class="contact">
                <div>
                    <h3>Contact</h3>
                    <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
                    <p>contact@interno.com</p>
                    <p>(123) 456 - 7890</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'FooterComponent',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="css" scoped>

footer .container {
    justify-content: space-between;
    margin-bottom: 134px;
}

footer .container > div {
    width: 33.3333%;
}

footer .footer_info p {
    margin-bottom: 33px;
}

footer .footer_info a {
    margin-right: 54px;
}

footer .pages {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
}

footer h3 {
    margin: 0;
}

footer .pages a {
    text-decoration: none;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 66px;
    color: #000;
}

footer .contact {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

footer .contact > div {
    width: 258px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #000;
}

.logo * {
    margin: 0;
}

</style>