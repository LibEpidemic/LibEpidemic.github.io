<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Quick Start</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          This page will help you quickly know the basic usages of LibEpidemic.
        </p>
      </div>
    </div>

    <div class="content">
      
      <p class="title">Download One Dataset</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p>You can simply download the datasets we have processed, the data link is <a href="https://pan.baidu.com/s/1qEfcXBO-QwZfiT0G3IYMpQ#list/path=%2F" target="_blank">BaiduDisk with code 1231</a> or <a href="https://drive.google.com/drive/folders/1g5v2Gq1tkOq8XO0HDCZ9nOTtRpB6-gPe?usp=sharing">Google Drive</a>.</p>
      <p>For example, if you download the METR_LA dataset, the directorys structure is as follows:</p>
      <br>

      <p class="title">Run Model Pipeline</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p>The script <code style="color: #e83e8c; font-size: 90%">run_model.py</code> used for training and evaluating a single model is provided in the root directory of the framework, and a series of command line parameters are provided to allow users to adjust the running parameter configuration.</p>
      <p>When run the <code style="color: #e83e8c; font-size: 90%">run_model.py</code>, you must specify the following three parameters, namely <b>task</b>, <b>dataset</b> and <b>model</b>. For example:</p>
      <div class="code">
        <code data-lang="bash">
          python run_model.py --task traffic_state_pred --model GRU --dataset METR_LA
        </code>
      </div>
      <p>This script will run the GRU model on the METR_LA dataset for traffic state prediction task under the default configuration.</p>
      <p>Furthermore, the script supports the input of the following command line parameters to adjust the parameter settings of the pipeline.</p>
      <p>Supporting parameters:</p>
      <ul>
        <li><code style="color: #e83e8c; font-size: 90%">task</code>: The name of the task to be performed, including <code style="color: #e83e8c; font-size: 90%">traffic_state_pred</code> and <code style="color: #e83e8c; font-size: 90%">traj_loc_pred</code>. Defaults to <code style="color: #e83e8c; font-size: 90%">None</code>.</li>
        <li><code style="color: #e83e8c; font-size: 90%">saved_model</code>：Whether to save the trained model. Defaults to <code style="color: #e83e8c; font-size: 90%">True</code>.</li>
        <li><code style="color: #e83e8c; font-size: 90%">train</code>：If the model has been pre-trained, whether to retrain the model. Defaults to <code style="color: #e83e8c; font-size: 90%">True</code>.</li>
        <li><code style="color: #e83e8c; font-size: 90%">batch_size</code>：The training and evaluation batch size.</li>
        <li><code style="color: #e83e8c; font-size: 90%">train_rate</code>：The proportion of the training set to the total dataset. (The order of division is training set, validation set, test set)</li>
        <li><code style="color: #e83e8c; font-size: 90%">eval_rate</code>：The proportion of the validation set.</li>
        <li><code style="color: #e83e8c; font-size: 90%">learning_rate</code>：Learning_rate. The default learning rate of different models may be different, please refer to the corresponding configuration file for details.</li>
        <li><code style="color: #e83e8c; font-size: 90%">max_epoch</code>：Maximum rounds of training. The default value varies with the model.</li>
        <li><code style="color: #e83e8c; font-size: 90%">gpu</code>：Whether to use GPU. Defaults to <code style="color: #e83e8c; font-size: 90%">True</code>.</li>
        <li><code style="color: #e83e8c; font-size: 90%">gpu_id</code>：The id of the GPU used. Defaults to <code style="color: #e83e8c; font-size: 90%">0</code>.</li>
      </ul>
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
  min-height: 250px;
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