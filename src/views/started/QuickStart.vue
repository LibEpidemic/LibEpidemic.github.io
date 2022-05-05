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
      <div>
            
            <p class="title">Init</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <!-- <p>Download the source files from GitHub:</p> -->
            <p>To use LibEpidemic to build a model, first initialize a directory under examples/ by using following commands:</p>
            <div class="code">
                <code data-lang="bash">
                    cd Epidemic-Modeling-survey
                    cd examples
                    mkdir LibEpidemicTest
                </code>
            </div>
            <p>Then you can create a new python file to write the code:</p>
            <div class="code">
                <code data-lang="bash">
                    touch test.py
                </code>
            </div>
            <p>If you only need to experience the most basic functions, such as building a basic SEIR model to familiarize yourself with the usage of LibEpidemic, you can also simply create a single file with the following command:</p>
            <div class="code">
                <code data-lang="bash">
                    cd Epidemic-Modeling-survey
                    cd examples
                    touch test.py
                </code>
            </div>
            <p>However, doing so will clutter the file structure and interfere with your subsequent use. Therefore, we do not recommend this.</p>
            <br>

            <p class="title">Import env</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>First make sure you have successfully installed the environment dependencies in requirements, then enter the following command in test.py:</p>
            <div class="code">
                <code data-lang="python">
                  from compartment.Graph import Graph
                  from compartment.Model import Model
                  from executor.Executor import Executor
                  from compartment.Descriptor import vertical_divide
                  from compartment.Transfer import init_compartment, set_path_exp, set_path_parameters
                  from visual.visual_graph import visual_model
                  from visual.visual_model_data import visual_compartment_values
                </code>
            </div>
            <p>To make sure the environment is ok, you can type:</p>
            <div class="code">
                <code data-lang="python">
                  print('Welcome to LibEpidemic!')
                </code>
            </div>
            <p>Then you will see following response:</p>
            <div class="code">
                <code data-lang="bash">
                  D:\softwares\python\python.exe D:/ncov/Epidemic-Modeling-survey/examples/test-copy/hello.py
                  Welcome to LibEpidemic!

                  Process finished with exit code 0
                </code>
            </div>
            <p>This means that your environment is configured correctly and you can start building infectious disease models using APIs!</p>
            <p>The above code can be seen at examples/test-copy/hello.py.</p>
            <br>

            <p class="title">Create Structure</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>Here you will quickly build a SEIR model using the API provided by LibEpidemic:</p>
            <div class="code">
                <code data-lang="python">
                  graph = Graph('basic_SEIR', 'S')
                  vertical_divide(graph, 'S', ['E', 'I', 'R'])
                  model = Model('basic_SEIR', graph)
                  visual_model(model)
                </code>
            </div>
            <ul>
              <li>The first line initializes a graph containing the S compartment and names it basic_SEIR.</li>
              <li>The second line uses vertical_divide to subdivide the initial S into S, E, I and R, which corresponds to the SEIR model.</li>
              <li>The third line converts the diagram used to describe the abstract structure into a model in LibEpidemic after determining the structure of the compartment model, providing support for subsequent work.</li>
              <li>The last line calls the visualization API and prints the structure diagram that builds this model.</li>
            </ul>
            <p>The above code can be seen at examples/test-copy/struct.py.</p>
            <br>

            <p class="title">Formula and Parameters</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>Here you need to assign a formula to each edge in the struct to implement the dynamics in the infectious disease model:</p>
            <div class="code">
                <code data-lang="python">
                  beta = 0.5
                  epsilon = 0.1
                  gamma = 0.1
                  population = 10000
                  set_path_exp(model, 'S', 'E', 'beta*S*I*popu')
                  set_path_parameters(model, 'S', 'E', 'beta', beta)
                  set_path_parameters(model, 'S', 'E', 'popu', 1.0 / population)
                  set_path_exp(model, 'E', 'I', 'epsilon*E')
                  set_path_parameters(model, 'E', 'I', 'epsilon', epsilon)
                  set_path_exp(model, 'I', 'R', 'gamma*I')
                  set_path_parameters(model, 'I', 'R', 'gamma', gamma)
                </code>
            </div>
            <p>This code formally transforms the previously established SEIR model structure into a complete SEIR model, including kinetic mechanisms and parameters.</p>
            <p>Lines 5, 8, and 10 in the above code define the dynamic equations between the compartments in the form of expressions. LibEpidemic’s engine and compilation system support arbitrary expressions consisting of multiplication and addition. This can cover the vast majority of scenarios in infectious disease models.</p>
            <p>Lines 1-4 set the specific value of the parameter, and lines 6, 7, 9, and 11 fill in these four parameters into the expression.</p>
            <p>The above code can be seen at examples/test-copy/param.py.</p>
            <br>

            <p class="title">Execute</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>A complete SEIR has been built, and you can finally use LibEpidemic's engine to execute the model and finish your work!</p>
            <div class="code">
                <code data-lang="python">
                  init_value = {'S': 9995, 'E': 2, 'I': 3, 'R': 0}
                  init_compartment(model, init_value)
                  executor = Executor(model)
                  for index in range(5):
                      executor.simulate_step(index)
                      print('_______________________________________')
                      print('day {}'.format(index + 1))
                      visual_compartment_values(model)
                </code>
            </div>
            <p>If things go well, you’ll get the following results from standard output:</p>
            <div class="code">
                <code data-lang="bash">
                  D:\softwares\python\python.exe D:/ncov/Epidemic-Modeling-survey/examples/test-copy/exec.py
                  _______________________________________
                  day 1
                  S : 9993.50075
                  E : 3.29925
                  I : 2.9000000000000004
                  R : 0.30000000000000004
                  _______________________________________
                  day 2
                  S : 9992.05169239125
                  E : 4.41838260875
                  I : 2.9399250000000006
                  R : 0.5900000000000001
                  _______________________________________
                  day 3
                  S : 9990.58289826266
                  E : 5.445338476462667
                  I : 3.0877707608750007
                  R : 0.8839925000000002
                  _______________________________________
                  day 4
                  S : 9989.040466774793
                  E : 6.443236116684064
                  I : 3.3235275324337676
                  R : 1.1927695760875003
                  _______________________________________
                  day 5
                  S : 9987.380524224098
                  E : 7.4588550557117115
                  I : 3.6354983908587974
                  R : 1.525122329330877

                  Process finished with exit code 0
                </code>
            </div>
            <p>This concludes LibEpidemic’s Quick Start, you can find the complete code above at examples/test-copy/exec.py. You can further experience LibEpidemic by changing the parameter values inside!</p>
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