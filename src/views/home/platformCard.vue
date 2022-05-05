<template>
  <div style="padding: 20px;">
    <a-row :gutter="[48, 16]">
      
      <a-col :span="8">
        <div class="pcard">
            <a-card title="PaperList" :bordered="true" style="border-radius: 5px">
                <p style="margin-bottom: 0px; height: 120px">LibEpidemic offers more than 300 research papers on spatio-temporal data mining from top conferences or journals.</p>
                <a-button style="padding-left: 180px; margin-top: 5px; font-size: 15px;" type="link"><a href="https://github.com/Bigscity-epidemic/Bigscity-epidemic-survey-paperlist" target="_blank">See More >></a></a-button>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="pcard">
            <a-card title="NPI modeling" :bordered="true" style="border-radius: 5px">
                <p style="margin-bottom: 0px; height: 120px">LibEpidemic use SEPIAR model and the deduction library to help you modeling NPI.</p>
                <a-button style="padding-left: 180px; margin-top: 5px; font-size: 15px;" type="link" @click="toRanking">See More >></a-button>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="pcard">
            <a-card title="Platform" :bordered="true" style="border-radius: 5px">
                <p style="margin-bottom: 0px; height: 120px">This website provides the docs, introduction and examples of using LibEpidemic.</p>
                <a-button style="padding-left: 180px; margin-top: 5px; font-size: 15px;" type="link"><a href="https://libepidemic-docs.readthedocs.io/en/latest" target="_blank">See More >></a></a-button>
            </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
    name: 'platCard',
    data() {
        return {};
    },
    methods: {
    toTask() {
        this.$router.push({
            name: "Task",
        });
    },
    toPaper() {
        this.$router.push({
            name: "Paper",
        });
    },
    toRanking() {
        this.$router.push({
            name: "Ranking",
        });
    },
    toChart() {
        this.$router.push({
            name: "Chart",
        });
    },
    toTutorial() {
        this.$router.push({
            name: "Tutorial",
        });
    }
  }
}
</script>

<style>
.pcard {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.pcard:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}
.pcard .ant-card-head {
    border-bottom: 0 !important;
    min-height: 32px !important;
    height: 48px;
}
.pcard .ant-card-head-title {
    font-size: 20px;
    white-space: pre-wrap !important;
    text-align: left;
}
.pcard .ant-card-body {
  font-size: 16px;
  height: 180px;
  padding: 8px 24px 8px 24px;
}
</style>