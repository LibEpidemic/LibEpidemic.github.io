<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Install LibEpidemic</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          <!-- LibCity can be installed with pip, with Conda or from source. -->
          LibEpidemic can be installed from source.
        </p>
      </div>
    </div>

    <div class="content">
        <div>
            
            <p class="title">Source</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <!-- <p>Download the source files from GitHub:</p> -->
            <p>LibEpidemic can only be installed from source code now. In the future, epidemiologist and professors can use no-code web-based platform for using LibEpidemic!</p>
            <p>Please execute the following command to get the source code.</p>
            <div class="code">
                <code data-lang="bash">
                    git clone https://github.com/Bigscity-epidemic/Epidemic-Modeling-survey<br>
                    cd Epidemic-Modeling-survey
                </code>
            </div>
            <p>After obtaining the source code, you can configure the environment.</p>
            <br>

            <p class="title">Requirements</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>Our code is based on Python version 3.9. Most APIs have been tested to run in any version environment between python3.6-3.9.</p>
            <p>After installing Python, you can install all the dependencies of LibEpidemic with the following command by pip.</p>
            <div class="code">
                <code data-lang="bash">
                    pip install -r requirements.txt
                </code>
            </div>
            <p>Now, you can use LibEpidemic, more details please refer to the <a href="https://libepidemic-docs.readthedocs.io/en/latest/Get%20Started/Installation.html">Installation Docs</a>.</p>
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
    margin: 50px auto 0px auto;
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