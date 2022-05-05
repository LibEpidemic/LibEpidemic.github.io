<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Model</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          LibEpidemic has 3 types of models <br>
          with preset structure, parameter and several applications.
        </p>
      </div>
    </div>

    <div class="content">
      <p class="title">Basic Model</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p>LibEpidemic provides 5 SEIR-class model, with Multi-stage and Dynamic-parameters strategy. LibEpidemic also provides no-code "one-fits-all" policy to help epidemiologists:</p>
      <br>
      <p class="sectitle">SEIR-class Model</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p>5 SEIR-class model are preset in LibEpidemic:</p>
      <ul>
        <li>SIR</li>
        <li>SEIR</li>
        <li>SIR with natural birth/death</li>
        <li>SEIR with natural birth/death</li>
        <li>SEPIR</li>
      </ul>
      <p>They come from textbooks or cups for early COVID-19 predictions.</p>
      <p>Users can view and modify the code of these basic models, fill in any parameter settings, complete the model simulation, and view the results.</p>
      <br>
      <p class="sectitle">Multi-stage and Dynamic-parameters Model</p>
      <p>Every models in LibEpidemic can use multi-stage or dynamic-parameters strategy.</p>
      <div style="width: 80%; margin: 10px auto 20px auto; text-align: center">
        <img
          src="../assets/img/multi.png"
          alt="toolkit"
          height="300"
        />
      </div>
      <p>Dynamic-parameters means only the parameters can change with time, not the structure.</p>
      <br>
      <p class="sectitle">One-fits-all Model</p>
      <p>Considering that the inputs to the underlying SEIR model are similar, LibEpidemic provide Mixed-strategy Model to Epidemiologists . The mixed-strategy model is used with the multi-stage method, and the optimal model in the model library is automatically selected through the given loss function in each stage.</p>
      <div style="width: 80%; margin: 10px auto 20px auto; text-align: center">
        <img
          src="../assets/img/select.png"
          alt="toolkit"
          height="300"
        />
      </div>
      <p>Mixed-strategy models can be used to build a "one fits all model“. Using this model, combined with multi-stage global predictions (tests), the total error is less than or equal to any single model.</p>
      <br>

      <p class="title">NPI Model</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      
      <p class="sectitle">Modeling NPI</p>
        <p>Epidemiologists are very concerned about the process by which infectious diseases spread. In the era of COVID-19 outbreak, the SEPIAR mechanism can completely describe the transmission process. With the subdivided extension, the modeling of most scenes can be completed.</p>
        <p>Based on this model, epidemiologists can: * Introduce a subdivided model to model any factors that may affect the spread of the epidemic, such as age, income, country, population mobility, etc. * Review or deduce the effects of arbitrary policies(More than 20 categories in total, covering the vast majority of specific policies for all countries) by writing code-free configuration files.</p>
        <ul>
          <li>social control policy</li>
          <li>Case handling policy</li>
          <li>vaccine policy</li>
        </ul>
        <p>Obtain the model's review(history) or deduction(future) results for the epidemic without using code.</p>
        <br>

      <p class="sectitle">NPI Deduction</p>
        <p>LibEpidemic use SEPIAR model and the deduction library to help you modeling NPI. The deduction library consists of several items, each of which contains a policy, a 0/1 flag, several data and several parameters. Among them, the policy is described by a natural language string, and the 0/1 mark indicates whether the policy participates in the deduction. The data includes the settings of the policy itself and other data that need to affect the parameters. The parameters are the parameters corresponding to this deduction item.</p>
        <p>For example, the policy of “deduce the effect of vaccines” has a 0/1 mark. The data are divided into 4 categories: VEI (infection protection rate), VES (symptomatic protection rate), correction of vaccination shots, and vaccination coverage. The first two categories are the settings of the policy itself, usually constants or epidemiological characteristic numbers, and the last two categories are other data affecting parameters. The parameters corresponding to this deduction item are β(S->E) and trans_PA(P->A).</p>

      <br>

      <p class="title">Complex Paper Model</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p>LibEpidemic provides 5 complex models from Papers to guide user simplify their research work with the support of LibEpidemic.</p>
      <br>

      
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

.sectitle {
  font-size: 24px;
  font-weight: 700;
  font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
  margin-bottom: 0;
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