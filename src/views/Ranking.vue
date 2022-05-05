<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">NPI Modeling</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          This page will help you quickly know the how to modeling and deducting NPI with LibEpidemic.
        </p>
      </div>
    </div>

    <div class="content">
      <p class="title">Modeling NPI</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p>Epidemiologists are very concerned about the process by which infectious diseases spread. In the era of COVID-19 outbreak, the SEPIAR mechanism can completely describe the transmission process. With the subdivided extension, the modeling of most scenes can be completed.</p>
        <p>Based on this model, epidemiologists can: * Introduce a subdivided model to model any factors that may affect the spread of the epidemic, such as age, income, country, population mobility, etc. * Review or deduce the effects of arbitrary policies(More than 20 categories in total, covering the vast majority of specific policies for all countries) by writing code-free configuration files.</p>
        <ul>
          <li>social control policy</li>
          <li>Case handling policy</li>
          <li>vaccine policy</li>
        </ul>
        <p>Obtain the model’s review(history) or deduction(future) results for the epidemic without using code.</p>
        <br>

      <p class="title">NPI Deduction</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p>LibEpidemic use SEPIAR model and the deduction library to help you modeling NPI. The deduction library consists of several items, each of which contains a policy, a 0/1 flag, several data and several parameters. Among them, the policy is described by a natural language string, and the 0/1 mark indicates whether the policy participates in the deduction. The data includes the settings of the policy itself and other data that need to affect the parameters. The parameters are the parameters corresponding to this deduction item.</p>
        <p>For example, the policy of “deduce the effect of vaccines” has a 0/1 mark. The data are divided into 4 categories: VEI (infection protection rate), VES (symptomatic protection rate), correction of vaccination shots, and vaccination coverage. The first two categories are the settings of the policy itself, usually constants or epidemiological characteristic numbers, and the last two categories are other data affecting parameters. The parameters corresponding to this deduction item are β(S->E) and trans_PA(P->A).</p>
        <br>

      <p class="title">SEPIAR Model</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p>The strcture of SEPIAR model can be seen at NPI/SEPIAR_graph.py.</p>
        <div class="code">
          <code data-lang="python">
            def get_eqs():<br>
              graph = Graph('SEPIIsR', 'S')<br>
              vertical_divide(graph, 'S', ['E', 'P', 'I', 'R'])<br>
              horizontal_divide(graph, 'I', ['A'])<br>
              vertical_divide(graph, 'I', ['Is'])<br>
              horizontal_divide(graph, 'Is', ['Is_ct'])<br>
              graph.add_single_node('Income')<br>
              add_path(graph, 'E', 'Is')<br>
              add_path(graph, 'Income', 'I')<br>
              add_path(graph, 'P', 'Is')<br>
              model = Model('SEIR_eqs', graph)<br>
              return model
          </code>
        </div>
        <p>The formula and default parameters of SEPIAR model can be seen at NPI/base_NPI_model.py.</p>
        <div class="code">
          <code data-lang="python">
            def get_model(r0, hidden, infect, confirm, sym_ratio, ct_ratio, remove, income, contact_ratio, s0, i0):<br>
              model = get_eqs()<br>
              inf = 2147483647.0<br>
              popu = s0 + i0<br>
              <br>
              set_path_exp(model, 'Income', 'I', 'income')<br>
              set_path_parameters(model, 'Income', 'I', 'income', income)<br>
              <br>
              set_path_exp(model, 'S', 'E', 'betaI*I*S*n+betaP*P*S*n+betaasym*Is_ct*S*n+betaasym*A*S*n')<br>
              set_path_parameters(model, 'S', 'E', 'betaI', 0.1 * r0)<br>
              set_path_parameters(model, 'S', 'E', 'betaP', r0)<br>
              set_path_parameters(model, 'S', 'E', 'betaasym', 0.2 * r0)<br>
              set_path_parameters(model, 'S', 'E', 'n', 1.0 / popu)<br>
              <br>
              set_path_exp(model, 'E', 'P', 'gamma*E*nocontact')<br>
              set_path_parameters(model, 'E', 'P', 'gamma', 1.0 / hidden)<br>
              set_path_parameters(model, 'E', 'P', 'nocontact', 1.0 - contact_ratio)<br>
              <br>
              set_path_exp(model, 'E', 'Is', 'E*contact')<br>
              set_path_parameters(model, 'E', 'Is', 'contact', contact_ratio)<br>
              <br>
              set_path_exp(model, 'P', 'I', 'alpha*P*sym*nocontact')<br>
              set_path_parameters(model, 'P', 'I', 'alpha', 1.0 / infect)<br>
              set_path_parameters(model, 'P', 'I', 'sym', sym_ratio)<br>
              set_path_parameters(model, 'P', 'I', 'nocontact', 1.0 - contact_ratio)<br>
              <br>
              set_path_exp(model, 'P', 'A', 'alpha*P*asym*nocontact')<br>
              set_path_parameters(model, 'P', 'A', 'alpha', 1.0 / infect)<br>
              set_path_parameters(model, 'P', 'A', 'asym', 1.0 - sym_ratio)<br>
              set_path_parameters(model, 'P', 'A', 'nocontact', 1.0 - contact_ratio)<br>
              <br>
              set_path_exp(model, 'P', 'Is', 'P*contact')<br>
              set_path_parameters(model, 'P', 'Is', 'contact', contact_ratio)<br>
              <br>
              set_path_exp(model, 'I', 'Is', 'confirm*I*noct')<br>
              set_path_parameters(model, 'I', 'Is', 'confirm', 1.0 / confirm)<br>
              set_path_parameters(model, 'I', 'Is', 'noct', 1.0 - ct_ratio)<br>
              <br>
              set_path_exp(model, 'I', 'Is_ct', 'confirm*I*ct')<br>
              set_path_parameters(model, 'I', 'Is_ct', 'confirm', 1.0 / confirm)<br>
              set_path_parameters(model, 'I', 'Is_ct', 'ct', ct_ratio)<br>
              <br>
              set_path_exp(model, 'Is', 'R', 'remove*Is')<br>
              set_path_parameters(model, 'Is', 'R', 'remove', 1.0 / remove)<br>
              <br>
              set_path_exp(model, 'Is_ct', 'R', 'remove_ct*Is_ct')<br>
              set_path_parameters(model, 'Is_ct', 'R', 'remove_ct', 1.0 / remove)<br>
              <br>
              set_path_exp(model, 'A', 'R', 'remove_A*A')<br>
              set_path_parameters(model, 'A', 'R', 'remove_A', 1.0 / remove)<br>
              <br>
              init_value = {'S': s0, 'E': 10.0 * i0, 'P': 3.0 * i0, 'I': i0, 'Is_ct': 0.0, 'Is': 0.0, 'A': 0.0, 'R': 0.0,<br>
                          'Income': inf}<br>
              init_compartment(model, init_value)<br>
              return model
          </code>
        </div>
        <p>LibEpidemic use these structure and formula to construct SEPIAR model, then use no-code setting file to help user deduct NPI.</p>
        <br>
    </div>
  </div>
</template>

<script>
import rankTable from "./ranking/rankingTable"

const speed = [
  {
    dataset: 'METR-LA',
    best: 'MTGNN',
    paper: '[KDD2020]Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#metr-la',
    mlink: '#',
    plink: 'https://arxiv.org/abs/2005.11650',
    dlink: 'METR-LA'
  },
  {
    dataset: 'PEMS-BAY',
    best: 'GWNET',
    paper: '[IJCAI2019]Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pems-bay',
    mlink: '#',
    plink: 'https://arxiv.org/abs/1906.00121',
    dlink: 'PEMS-BAY'
  },
  {
    dataset: 'PEMSD4',
    best: 'GWNET',
    paper: '[IJCAI2019]Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd4',
    mlink: '#',
    plink: 'https://arxiv.org/abs/1906.00121',
    dlink: 'PEMSD4'
  },
  {
    dataset: 'PEMSD8',
    best: 'GWNET',
    paper: '[IJCAI2019]Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd8',
    mlink: '#',
    plink: 'https://arxiv.org/abs/1906.00121',
    dlink: 'PEMSD8'
  },
  {
    dataset: 'T-Drive20150206',
    best: 'MTGNN',
    paper: '[KDD2020]Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#t-drive20150206',
    mlink: '#',
    plink: 'https://arxiv.org/abs/2005.11650',
    dlink: 'T-Drive20150206'
  },
  {
    dataset: 'TAXIBJ2015',
    best: 'AGCRN',
    paper: '[NeurIPS2020]Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#taxibj',
    mlink: '#',
    plink: 'https://arxiv.org/abs/2007.02842',
    dlink: 'TAXIBJ2015'
  },
  {
    dataset: 'NYCTAXI202001-202003-3600',
    best: 'DCRNN',
    paper: '[ICLR2018]Diffusion Convolutional Recurrent Neural Network: Data-Driven Traffic Forecasting',
    datasetlink: '#',
    mlink: '#',
    plink: 'https://arxiv.org/abs/1707.01926',
    dlink: 'NYCTAXI202001-202003-3600'
  },
  // {
  //     dataset: 'TAXIBJ',
  //     best: 'MTGNN',
  //     paper: 'Spatio-Temporal Graph Structure Learning for Traffic Forecasting',
  //     datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#taxibj',
  //     mlink: '#',
  //     plink: 'https://arxiv.org/abs/2005.11650',
  //     dlink: 'TAXIBJ'
  // },
  {
    dataset: 'NYCBike20140409',
    best: 'MTGNN',
    paper: '[KDD2020]Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nycbike20140409',
    mlink: '#',
    plink: 'https://arxiv.org/abs/2005.11650',
    dlink: 'NYCBike20140409'
  },
]

const location = [
  {
    dataset: 'foursqaure-tky',
    best: 'DeepMove',
    paper: '[WWW2018]DeepMove: Predicting Human Mobility with Attentional Recurrent Networks',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#foursquare',
    mlink: '#',
    plink: 'https://dl.acm.org/doi/10.1145/3178876.3186058',
    dlink: 'foursqaure-tky'
  },
  {
    dataset: 'Gowalla',
    best: 'DeepMove',
    paper: '[WWW2018]DeepMove: Predicting Human Mobility with Attentional Recurrent Networks',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#gowalla',
    mlink: '#',
    plink: 'https://dl.acm.org/doi/10.1145/3178876.3186058',
    dlink: 'Gowalla'
  },
]

export default {
  data() {
    return {
      speed,
      location
    };
  },
  components: {
    rankTable
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
  background: rgb(27, 140, 233)
    linear-gradient(to right, rgb(27, 140, 233), rgb(11, 247, 188));
  /* border: blue solid 1px; */
}
.content {
  width: 80%;
  height: auto;
  margin: 50px auto 0 auto;
  /* border: blue solid 3px; */
}
.task-name {
  font-size: 32px;
  font-weight: 700;
  font-family: "Open Sans", "Microsoft YaHei", Arial, Helvetica, sans-serif;
  margin-bottom: 0;
}
</style>