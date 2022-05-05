<template>
  <div style="background-color: transparent; padding: 5px 20px 20px 20px;">
    <a-row :gutter="[48, 16]" style="margin-bottom: 30px">
      <a-col :span="8">
        <div class="fcard">
            <a-card :bordered="false">
                <div style="text-align: center">
                  <img src="../../assets/img/data.png" alt="data"  height="80" style="margin-bottom: 10px"/>
                  <h3 style="font-size: 20px;">Engine and APIs</h3>
                  <p style="text-align: left">Researchers can build, visualize, simulate his epidemic model with engine and APIs in LibEpidemic, without programming the principles of infectious disease dynamics models, and without manually writing complex model extensions.</p>
                </div>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="fcard">
            <a-card :bordered="false">
              <div style="text-align: center">
                <img src="../../assets/img/algorithm.png" alt="algorithm"  height="80" style="margin-bottom: 10px"/>
                <h3 style="font-size: 20px;">Models</h3>
                <p style="text-align: left">Epidemiologists can use the existing mature infectious disease models, make a small amount of expansion according to the actual situation, and then complete the model execution with the support of LibEpidemic.</p>
              </div>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="fcard">
            <a-card :bordered="false">
              <div style="text-align: center">
                <img src="../../assets/img/evaluation.png" alt="algorithm"  height="80" style="margin-bottom: 10px"/>
                <h3 style="font-size: 20px;">Relevant Applications</h3>
                <p style="text-align: left">LibEpidemic provides paperlist about epimodeling, epidemic prediction platform integrating bigdata, and support epimodeling project under BRICS-STI framework.</p>
              </div>
            </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
    name: 'featCard',
    data() {
        return {};
    }
}
</script>

<style>
.fcard .ant-card-head {
    border-bottom: 0 !important;
    height: 64px !important;
}
/* .fcard .ant-card-head-title {
    font-size: 20px;
    white-space: pre-wrap !important;
    text-align: center;
} */
.fcard .ant-card-body {
  font-size: 17px;
  height: 170px;
}
</style>