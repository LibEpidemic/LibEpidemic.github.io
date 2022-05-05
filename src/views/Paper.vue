<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Project</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          This page introduce the EpiModeling project supported by LibEpidemic.
        </p>
      </div>
    </div>
    <div class="content">
        <div>
          <div style="width: 60%; margin: 10px auto 20px auto; text-align: center">
            <img
              src="../assets/img/sti.png"
              alt="toolkit"
              height="400"
            />
          </div>
          <p>LibEpidemic is an open source modeling framework, built in python, designed to help researchers, epidemiologists, teachers, and students whose research and learn related to infectious disease modeling.</p>
          <p>We provide a complete modeling engine for building warehouse models of any shape, complete parameter configuration and reloading mechanisms to implement dynamic parameters, and even meta-population models. Through this unified engine, researchers can quickly and easily build their own infectious disease models, focusing more on solving epidemiological problems and designing experiments rather than writing low-level code.</p>
          <div style="width: 80%; margin: 10px auto 20px auto; text-align: center">
            <img
              src="../assets/img/paper2.png"
              alt="toolkit"
              height="550"
            />
          </div>
          <p>In order to achieve the above goals, LibEpidemic has built an engine-model-application three-level framework, which provides users with different levels of freedom and support for different purposes. Their functions are:</p>
          <ul>
              <li>engine: build any model with any parameters, learn everything in LibEpidemic</li>
              <li>model: build specific model with any parameters or settings, learn upper APi in LibEpidemic</li>
              <li>applications: use NPI or MedRes model to solve epidemiological problem, learn basic grammar of python is enough!</li>
            </ul>
          <p>Also, this open source framework has also received project support and design guidance from BRICS, Beihang University and other organizations or universities. Support are provided directly or indirectly from:</p>
          <div style="width: 50%; margin: 10px auto 20px auto; text-align: center">
            <img
              src="../assets/img/support.png"
              alt="toolkit"
              height="300"
            />
          </div>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), rgb(103, 179, 241), rgb(103, 179, 241));"></a-divider>
            <br>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        components: {
        },
        methods: {
            toPaperDetail(paper) {
                this.$router.push({
                    name: paper,
                });
            },
        }
    };
</script>

<style scoped>
.container {
  margin: auto;
  width: 100%;
  height: auto;
  /* border: red solid 1px; */
}
.header {
  width: 100%;
  height: 250px;
  background:  rgb(27, 140, 233) linear-gradient(to right,  rgb(27, 140, 233), rgb(11, 247, 188));
  /* border: blue solid 1px; */
}
.content {
    width: 80%;
    height: auto;
    margin: 50px auto 0 auto;
    font-size: 20px;
    line-height: 36px;
    color: black;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    /* border: blue solid 3px; */
}
.title {
    font-size: 32px;
    font-weight: 700;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    padding: 0;
    margin-bottom: 0px;
    line-height: 36px;
    color: black;
}
.title:hover {
    color: rgb(27, 140, 233);
}
</style>