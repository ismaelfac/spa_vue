<template>
  <div>
    <!-- HEADER AREA START -->
    <header class="header-area header-wrapper">
      <div class="header-top-bar bg-white">
        <div class="container">
          <div class="row">
            <div class="col-md-2 col-sm-6 col-xs-12">
              <div class="logo">
                <a href="index.html">
                  <img src="../../../assets/images/logo/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-md-7 hidden-sm hidden-xs">
              <div class="company-info clearfix">
                <div class="company-info-item">
                  <div class="header-icon">
                    <img
                      src="../../../assets/images/icons/phone.png"
                      alt=""
                    />
                  </div>
                  <div class="header-info">
                    <h6>+57 311 6676767</h6>
                    <p>Abiertos de 8 am - 6pm - Hora Colombia</p>
                  </div>
                </div>
                <div class="company-info-item">
                  <div class="header-icon">
                    <img
                      src="../../../assets/images/icons/mail-open.png"
                      alt=""
                    />
                  </div>
                  <div class="header-info">
                    <h6>
                      <a href="mailto:hnasir770@gmail.com"
                        >info@inversionesyproyectos.com</a
                      >
                    </h6>
                    <p>Envianos tu Email</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="header-search clearfix">
                <ul class="nav navbar-nav navbar-right">
                  <!-- Authentication Links -->
                  <template v-if="!currentUser">
                    <div class="m-auto" style="display:inline-flex">
                      <router-link tag="li" to="/login"
                        ><a href="">Login</a></router-link
                      >
                      <div class="ml-2 mr-2">|</div>
                      <router-link tag="li" to="/register"
                        ><a href="">Registrarme</a></router-link
                      >
                    </div>
                  </template>
                  <template v-else>
                    <nav id="primary-menu">
                      <ul class="main-menu text-center">
                        <li class="nav-item dropdown">
                          <a
                            id="navbarDropdown"
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                            aria-haspopup="true"
                          >
                            Ismael Lastre Alvarez <span class="caret"></span>
                          </a>

                          <div
                            class="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                          >
                            <a
                              href="#!"
                              @click.prevent="logout"
                              class="dropdown-item"
                              >Logout</a
                            >
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </template>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="sticky-header"
        class="header-middle-area  transparent-header hidden-xs"
      >
        <div class="container">
          <div class="full-width-mega-drop-menu">
            <div class="row">
              <div class="col-md-12">
                <div class="sticky-logo">
                  <a href="index.html">
                    <img src="images/logo/logo.png" alt="" />
                  </a>
                </div>
                <nav id="primary-menu">
                  <ul class="main-menu text-center">
                    <router-link tag="li" to="/" exact
                      ><a>Inicio</a></router-link
                    >
                    <router-link tag="li" to="about"
                      ><a>Sobre Nosotros</a></router-link
                    >
                    <router-link tag="li" to="/brands"
                      ><a>Marca</a></router-link
                    >
                    <router-link tag="li" to="/blog"><a>Blog</a></router-link>
                    <router-link tag="li" to="/properties"
                      ><a>Portafolio</a></router-link
                    >
                    <router-link tag="li" to="/contact"
                      ><a>Contacto</a></router-link
                    >
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- HEADER AREA END -->
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      currentUser: false
    };
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="css" scoped>
/*logo*/

.logo {
  padding: 13px 0;
}

/*company-info*/

.company-info {
  padding: 39px 0;
}

.company-info-item {
  float: left;
  overflow: hidden;
  width: 50%;
}

.header-icon {
  float: left;
  width: 18%;
}

.header-info {
  float: left;
  width: 82%;
}

.company-info .company-info-item:nth-child(2) {
  padding-left: 5%;
}

.header-info {
  h6 {
    font-family: montserrat;
    line-height: 15px;
    margin-bottom: 5px;
  }
  p {
    color: #606060;
    font-size: 12px;
    font-weight: 300;
    line-height: 12px;
    margin-bottom: 0;
  }
}

/*header-search*/

.header-search {
  padding: 40px 0;
  button {
    float: left;
    height: 30px;
    width: 18%;
  }
  input {
    border: 1px solid #1f223e;
    box-shadow: none;
    color: #303030;
    float: left;
    font-weight: 300;
    height: 30px;
    margin-bottom: 0;
    padding-left: 15px;
    width: 82%;
    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #303030;
      opacity: 1;
    }
    &::-moz-placeholder {
      /* Firefox 19+ */
      color: #303030;
      opacity: 1;
    }
    &:-ms-input-placeholder {
      /* IE 10+ */
      color: #303030;
      opacity: 1;
    }
    &:-moz-placeholder {
      /* Firefox 18- */
      color: #303030;
      opacity: 1;
    }
  }
}

/*menu style */

.header-area {
  z-index: 10;
  position: relative;
}

/*.main-menu > li > a {
  color: #303030;
  display: block;
  padding: 40px 20px;
  text-transform: uppercase;
}*/

.main-menu {
  > li {
    + li {
      margin-left: 55px;
    }
    > a {
      color: #1f223e;
      display: block;
      font-size: 16px;
      padding: 15px 0;
      text-transform: uppercase;
    }
  }
  li {
    display: inline-block;
    position: relative;
  }
  > li:hover > a {
    color: #95c41f;
  }
}

.drop-menu > li:hover > a, .single-mega-item > li:hover > a {
  color: #95c41f;
}

/*drop-menu Style*/

.drop-menu {
  background: #ffffff none repeat scroll 0 0;
  border-bottom: 4px solid #95c41f;
  box-shadow: 0 1px 2px rgba(86, 86, 90, 0.5);
  left: 0;
  position: absolute;
  text-align: left;
  top: 100%;
  transform: scaleY(0);
  transform-origin: 0 0 0;
  transition: all 0.3s ease 0s;
  visibility: hidden;
  width: 250px;
  z-index: 2;
}

.menu-right {
  left: auto;
  right: 0;
}

.drop-menu li {
  border-bottom: 1px solid #e1e1e1;
  display: block;
  a {
    display: block;
    font-size: 12px;
    padding: 8px 20px;
    text-transform: uppercase;
  }
}

.main-menu li:hover .drop-menu {
  transform: scale(1);
  visibility: visible;
}

/*Mega menu style*/
/*#primary-menu {
  position: relative;
}*/

.mega-menu-area {
  background: #ffffff none repeat scroll 0 0;
  border-bottom: 4px solid #95c41f;
  box-shadow: 0 1px 2px rgba(86, 86, 90, 0.5);
  left: 0;
  padding-bottom: 10px;
  position: absolute;
  text-align: left;
  top: 100%;
  transform: scaleY(0);
  transform-origin: 0 0 0;
  transition: all 0.3s ease 0s;
  visibility: hidden;
  width: 100%;
  z-index: 2;
}

.main-menu li.mega-parent {
  position: static;
}

.single-mega-item {
  float: left;
  width: 25%;
  padding: 0 15px;
  li {
    display: block;
    border-bottom: 1px solid #e5e5e5;
    &:last-child {
      border-bottom: 0px solid #000;
    }
    a {
      padding: 13px 0px;
      display: block;
      font-weight: 300;
    }
  }
}

.main-menu li:hover .mega-menu-area {
  transform: scale(1);
  visibility: visible;
}

.header-middle-area {
  .container .row [class*="col-"] {
    position: static;
  }
  .full-width-mega-drop-menu {
    position: relative;
  }
}

/*====================================================================*/

.drop-menu-right {
  left: auto;
  right: 0;
}

/*====================================================================*/

/*Header Transprent */

.transparent-header {
  position: absolute;
  width: 100%;
  margin: auto;
  background: rgba(31, 34, 62, 0.9) none repeat scroll 0 0;
  transition: all 0.3s ease 0s;
  .main-menu > li {
    > a {
      color: #fff;
    }
    &:hover > a {
      color: #95c41f;
    }
  }
  &.sticky {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 1px 3px rgba(50, 50, 50, 0.4);
  }
}

/*Sticky Menu*/

.sticky {
  left: 0;
  margin: auto;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 1px 3px rgba(50, 50, 50, 0.4);
  .main-menu {
    > li {
      > a {
        color: #303030;
        font-size: 14px;
        padding: 18px 0;
      }
      + li {
        margin-left: 40px;
      }
    }
    text-align: right;
  }
}

.sticky-logo img {
  display: none;
  transition: all 0.3s ease 0s;
}

.sticky .sticky-logo img {
  display: block;
  float: left;
  padding: 10px 0;
  width: 70px;
}
</style>
