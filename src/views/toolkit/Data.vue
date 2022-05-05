<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Structure</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          LibEpidemic provides 3 APIs for building the compartment model structure<br>
           which can be seen at compartment/Descriptor.py.
        </p>
      </div>
    </div>

    <div class="content">
      <div>
        <div style="width: 80%; margin: 10px auto 20px auto; text-align: center">
            <img
              src="../../assets/img/struct.png"
              alt="toolkit"
              height="200"
            />
          </div>
        <p class="title">vertical_divide</p>
          <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
          <p>Vertical Divide can subdivide compartments by information relevant to the epidemiological process, such as asymptomatic, pre-symptomatic, confirmed, isolated, etc. And such subdivide supports the modeling of individual differences within the same compartment.</p>
          <div class="code">
              <code data-lang="python">
                def vertical_divide(graph: Graph, target_node_name: str, divide_name_list: list):
              </code>
          </div>
          <p>The following image is a general view of vertical divide:</p>
          <div style="width: 80%; margin: 10px auto 20px auto; text-align: center">
            <img
              src="../../assets/img/vertical_divide.png"
              alt="toolkit"
              height="400"
            />
          </div>
          <p>From a local perspective, vertical divide subdivides a compartment into three new compartments.<br>From a global perspective, vertical divide adds stages in the epidemiological process.</p>
          <br>

          <p class="title">horizontal_divide</p>
          <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
          <p>Horizontal Divide can subdivide compartments by information not relevant to the epidemiological process, such as age, gender, country, etc. And such subdivide supports the modeling of individual differences within the same compartment.</p>
          <div class="code">
              <code data-lang="python">
                def horizontal_divide(graph: Graph, target_node_name: str, divide_name_list: list):
              </code>
          </div>
          <p>The following image is a general view of horizontal divide:</p>
          <div style="width: 80%; margin: 10px auto 20px auto; text-align: center">
            <img
              src="../../assets/img/horizontal_divide.png"
              alt="toolkit"
              height="400"
            />
          </div>
          <p>From a local perspective, horizontal divide subdivides a compartment into three new compartments.<br>From a global perspective, horizontal divide adds stages not in the epidemiological process.</p>
          <br>

          <p class="title">add_path</p>
          <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
          <p>Add Path can add an transmission, give it formula and parameters. It is usually used in combination with the two methods above.</p>
          <div class="code">
              <code data-lang="python">
                def add_path(graph: Graph, from_name: str, to_name: str):
              </code>
          </div>
          <p>The following image is a general view of add path:</p>
          <div style="width: 80%; margin: 10px auto 20px auto; text-align: center">
            <img
              src="../../assets/img/add_path.png"
              alt="toolkit"
              height="400"
            />
          </div>
          <br>
      </div>
    </div>
  </div>
</template>

<script>
    import conditionDataTable from "./conditionDataTable.vue"
    import peopleDataTable from "./peopleDataTable.vue"
    import vehicleDataTable from "./vehicleDataTable.vue"

    const condition = [
    ]

    export default {
        data() {
            return {
              condition,
              people,
              vehicle,
              path:process.env.BASE_URL,
            };
        },
        components: {
          conditionDataTable,
          peopleDataTable,
          vehicleDataTable
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
  min-height: 300px;
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
    margin-bottom: 0;
}

:target {
    padding-top: 100px;
    margin-top: -100px;
}
.code {
    color: #f8f8f2;
    background-color: #272822;
    tab-size: 4;
    overflow: auto;
    width: 100%;
    padding: 10px 20px;
    margin: 0px 0px 16px 0px;
    text-align: left;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    line-height: 1.5;
}


</style>