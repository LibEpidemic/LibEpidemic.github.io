<template>
    <div class="container">
        <div class="header">
            <div style="padding-top: 20px;color: white;">
                <p style="margin: 20px 0 30px 130px; font-size: 60px">Execution</p>
                <p style="margin: 0px 0 20px 130px; font-size: 30px">
                    Executor can use the model and all the methods of each class, <br>
                    and use the expression analysis system to complete the simulation of the compartment model.
                </p>
            </div>
        </div>

        <div class="content">
            <div>
                <div style="width: 80%; margin: 10px auto 20px auto; text-align: center">
                    <img
                    src="../../assets/img/exe.png"
                    alt="toolkit"
                    height="350"
                    />
                </div>
                <p>Executor has 2 functions:
                    <ul>
                        <li>parse the expression like the string 'beta*S*I*popu'.</li>
                        <li>calculate the expression to simulate the model.</li>
                    </ul>
                </p>
                <p>Executing the SEIR model can be done with only 2 APIs, without programming the principles of infectious disease dynamics models, and without manually writing complex model extensions. In fact, executing steps is the same to every model, not only SEIR.
                    <ul>
                        <li>Use init_compartment to set the init value of each compartment.</li>
                        <li>Use simulate_step to finish all parsing and calculating.</li>
                    </ul>
                </p>
                <div class="code">
                    <code data-lang="python">
                        init_value = {'S': 9995, 'E': 2, 'I': 3, 'R': 0}<br>
                        init_compartment(model, init_value)<br>
                        executor = Executor(model)<br>
                        for index in range(5):<br>
                            executor.simulate_step(index)<br>
                            print('_______________________________________')<br>
                            print('day {}'.format(index + 1))<br>
                            visual_compartment_values(model)
                    </code>
                </div>
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

table {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: 'tnum';
    display: table;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;
    border: 0.1px solid #1890ff;
}
thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
th {
    display: table-cell;
    vertical-align: inherit;
    overflow-wrap: break-word;
    padding: 16px 16px;
    background: #97b9f7;
    border: 0.1px solid #1890ff;
    color: white;
    font-weight: 700;
    font-family: Nunito, 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}
td {
    display: table-cell;
    vertical-align: inherit;
    padding: 16px 16px;
    overflow-wrap: break-word;
    background: white;
    color: black;
    border: 0.1px solid #1890ff;
    font-size: 15px;
    font-family: Nunito, 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}
</style>