<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header
      class="header"
      :style="{
        height: '80px',
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }"
    >
      <a-menu
        theme="dark"
        mode="horizontal"
        v-if="lang"
        :style="{
          width: '1200px',
          margin: 'auto',
          lineHeight: '80px',
        }"
      >
        <a-menu-item key="1" @click="menuItemClick('Home')">
          <img class="logo" src="./assets/img/logo.png" />
        </a-menu-item>

        <a-menu-item
          key="2"
          style="width: 135px; font-size: 20px; textalign: center"
        >
          <a-dropdown>
            <span class="ant-dropdown-link">
              Get Started
              <a-icon type="down" />
            </span>
            <a-menu slot="overlay" style="width: 160px">
              <a-menu-item
                @click="menuItemClick('InstallLibEpidemic')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">Install LibEpidemic</a>
              </a-menu-item>
              <a-menu-item
                @click="menuItemClick('QuickStart')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">Quick Start</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-menu-item>

        <a-menu-item
          key="3"
          style="width: 80px; font-size: 20px; textalign: center"
          @click="menuItemClick('Task')"
        >
          Model
        </a-menu-item>

        <a-menu-item
          key="4"
          style="width: 80px; font-size: 20px; textalign: center"
        >
          <a-dropdown>
            <span class="ant-dropdown-link">
              Toolkit
              <a-icon type="down" />
            </span>
            <a-menu slot="overlay" style="width: 100px">
              <a-menu-item
                @click="menuItemClick('Data')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">Structure</a>
              </a-menu-item>
              <a-menu-item
                @click="menuItemClick('Model')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">Parameter</a>
              </a-menu-item>
              <a-menu-item
                @click="menuItemClick('Evaluation')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">Execution</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-menu-item>

        <a-menu-item
          key="5"
          style="
            width: 110px;
            font-size: 20px;
            textalign: center;
            margin-left: 10px;
          "
        >
          <a
            href="https://libepidemic-docs.readthedocs.io/en/latest"
            target="_blank"
            >Document</a
          >
        </a-menu-item>

        <!-- <a-menu-item
          key="6"
          style="width: 70px; font-size: 20px; textalign: center"
          @click="menuItemClick('PaperList')"
        >
          PaperList
        </a-menu-item> -->

        <a-menu-item
          key="7"
          style="width: 60px; font-size: 20px; textalign: center"
          @click="menuItemClick('Ranking')"
        >
          NPI
        </a-menu-item>

        <a-menu-item
          key="8"
          style="width: 85px; font-size: 20px; textalign: center"
          @click="menuItemClick('Paper')"
        >
          Project
        </a-menu-item>

        <a-menu-item
          key="5"
          style="
            width: 110px;
            font-size: 20px;
            textalign: center;
            margin-left: 10px;
          "
        >
          <a
            href="https://github.com/Bigscity-epidemic/Bigscity-epidemic-survey-paperlist"
            target="_blank"
            >Paperlist</a
          >
        </a-menu-item>

        <a-menu-item
          key="9"
          style="width: 70px; font-size: 20px; textalign: center"
          @click="menuItemClick('About')"
        >
          About
        </a-menu-item>

        <!-- <a-menu-item
          key="8"
          style="width: 80px; font-size: 20px; textalign: center"
          @click="menuItemClick('Chart')"
        >
          Visual
        </a-menu-item> -->

        <a-menu-item
          key="10"
          style="width: 95px; font-size: 20px; textalign: center"
        >
          <a href="https://github.com/Bigscity-epidemic/Epidemic-Modeling-survey" target="_blank">GitHub</a>
        </a-menu-item>

        <!-- <a-menu-item
          key="10"
          style="width: 120px; font-size: 20px; textalign: center"
          @click="changeLang"
        >
          中文版
        </a-menu-item> -->
      </a-menu>

    </a-layout-header>
    <a-layout-content>
      <div
        :style="{
          marginTop: '80px',
          backgroundColor: 'transparent',
          minHeight: '680px',
          height: 'auto',
        }"
      >
        <router-view />
      </div>
    </a-layout-content>

    <a-layout-footer v-if="lang" :style="{ backgroundColor: '#ddd' }">
      <div style="width: 80%; margin: auto; min-width: 1000px">
        <div
          style="
            display: inline-block;
            border: red solid 0px;
            width: 160px;
            height: 160px;
            vertical-align: top;
          "
        >
          <a href="https://clustrmaps.com/site/1biw6" title="Visit tracker"
            ><img
              style="width: 200px; height: 127px"
              src="//clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=tt&d=lIAqix0OUQ3-odCYrKKkfjqRbakJACtJCPHfUkqRc48"
          /></a>
          <div id = "counter" style="width: 160px;">
            <p style="float: left; font-size: 16px;">Current:</p>
            <a style="float: right;" href="https://statcounter.com"><img
              class="statcounter"
              src="https://c.statcounter.com/12660855/0/b2a6fe31/0/"
              alt="Web Analytics"
              referrerPolicy="no-referrer-when-downgrade"></a>
            <!-- <a style="float:right;" title="Web Analytics"
              href="https://statcounter.com/" target="_blank"><img
              class="statcounter"
              src="https://c.statcounter.com/12660855/0/b2a6fe31/0/"
              alt="Web Analytics"
              referrerPolicy="no-referrer-when-downgrade"></a> -->
          </div>
        </div>


        <div style="display: block; float: right; width: 150px; height: 160px">
          <h3 style="color: rgb(27, 140, 233)">Useful Links</h3>
          <dl>
            <dt>
              <a-button class="footer-btn" type="link"
                ><a style="font-size: 16px" href="https://www.bigcity.ai/"
                  >BIGSCity</a
                ></a-button
              >
            </dt>
          </dl>
        </div>
        <div
          style="
            display: block;
            float: right;
            width: 150px;
            height: 160px;
            vertical-align: top;
          "
        >
          <h3 style="color: rgb(27, 140, 233)">Resources</h3>
          <dl>
            <dt>
              <a-button class="footer-btn" type="link"
                ><a
                  style="font-size: 16px"
                  href="https://libepidemic-docs.readthedocs.io/en/latest/"
                  target="_blank"
                  >Document</a
                ></a-button
              >
            </dt>
            <dt>
              <a-button class="footer-btn" type="link"
                ><a
                  style="font-size: 16px"
                  href="https://github.com/Bigscity-epidemic/Epidemic-Modeling-survey"
                  target="_blank"
                  >GitHub</a
                ></a-button
              >
            </dt>
            <dt>
              <a-button
                class="footer-btn"
                type="link"
                style="font-size: 16px"
                href="https://github.com/Bigscity-epidemic/Bigscity-epidemic-survey-paperlist"
                target="_blank"
                >Paper Library</a-button
              >
            </dt>
            <dt>
              <a-button
                class="footer-btn"
                type="link"
                style="font-size: 16px"
                @click="toAbout"
                >About Us</a-button
              >
            </dt>
          </dl>
        </div>
        <div
          style="
            text-align: center;
            font-size: 16px;
            color: black;
            margin-top: 20px;
          "
        >
          Copyright © 2022 LibEpidemic All rights served.
        </div>
      </div>
    </a-layout-footer>

  </a-layout>
</template>

<style>
#components-layout-demo-fixed .logo {
  width: 150px;
  height: 50px;
  /* background: rgba(255, 255, 255, 0.2); */
  margin: 0px 24px 15px 0;
  float: left;
}
.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background-color: rgba(255, 255, 255, 0) !important;
}

.ant-menu-dark .ant-menu-item-selected {
  color: rgba(255, 255, 255, 0.65) !important;
}

.ant-menu-item .ant-menu-item-active {
  color: rgba(255, 255, 255, 0.65) !important;
}

.footer-btn {
  margin-top: -5px;
  color: black !important;
}
</style>

<script type="text/javascript">
      var sc_project=12660855;
      var sc_invisible=0;
      var sc_security="b2a6fe31";
</script>


<script>

let script = document.createElement('script');
script.type = "text/javascript";
script.src = "https://www.statcounter.com/counter/counter.js";
console.log(script)
document.getElementsByTagName('head')[0].appendChild(script);
script.onload = function() {
  console.log('js加载成功')
}
script.onerror = function() {
  console.log('js加载失败')
}

export default {
  data() {
    return {
      lang: true,
      isActive: true,
    };
  },
  created(){
    this.showStatus();
  },
  methods: {
    menuItemClick(link) {
      this.$router.push({
        name: link,
      });
    },
    toPaper() {
      this.$router.push({
        name: "Paper",
      })
    },
    toAbout() {
      this.$router.push({
        name: "About",
      });
    },
    showStatus(){
      var sc_project=12660855;
      var sc_invisible=0;
      var sc_security="b2a6fe31";
      var scJsHost = "https://";
      document.write("<sc"+"ript type='text/javascript' src='" + scJsHost+ "statcounter.com/counter/counter.js'></"+"script>");
    }
  },
};
</script>
